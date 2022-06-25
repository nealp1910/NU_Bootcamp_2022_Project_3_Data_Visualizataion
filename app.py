#  Dependencies 
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template  
import json 
import numpy as np

#################################################
# Database Setup (database will be called "movies")
#################################################
engine = create_engine('postgresql://postgres:42094064Aa!1@localhost:5432/hollywood_movies')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Movies = Base.classes.movies

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# this route loads the home page (index.html)
@app.route("/")
def welcome():
    """List all available api routes."""
    return render_template('index.html')

# this is an api route sending data from the database
@app.route("/api/v1.0/data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all movie titles"""
    # Query all passengers
    results = session.query(Movies.title, Movies.month, Movies.year, Movies.domestic_sales, Movies.international_sales, Movies.world_sales, Movies.movie_runtime).all()
    session.close()
    all_names = []
    for title, month, year, domestic_sales, international_sales, world_sales, movie_runtime in results:
        movie_dict = {}
        movie_dict["title"] = title
        movie_dict["month"] = month
        movie_dict["year"] = year
        movie_dict["domestic_sales"] = domestic_sales
        movie_dict["international_sales"] = international_sales
        movie_dict["world_sales"] = world_sales
        movie_dict["movie_runtime"] = movie_runtime        
        all_names.append(movie_dict)
    # Convert list of tuples into normal list

    return jsonify(all_names)


if __name__ == '__main__':
    app.run(debug=True)
