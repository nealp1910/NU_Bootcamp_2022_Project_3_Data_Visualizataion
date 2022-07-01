const url = "/api/v2.0/data"

// let January = Object.values(TwoOhOhTwo.January);
// console.log(TwoOhOhTwo)
// create init function to an build inital plot when refreshed
function init(){
    buildPlot()
}
d3.json(url).then((data) =>{
    console.log(data)  

    //Making a list including all of the movie title names
    
    // Create the drop down menu by inserting each movie title name in the below function.
    

    var uniqueyear = {}
    let yearslist = data.map(i => i.year )
    const uniqueYears = [...new Set(yearslist)]
    const sortYears = uniqueYears.sort(function(a,b){return a-b})

    // console.log(data)        
    // console.log(yearslist)
    // console.log(sortYears)

    // d3.selectAll("#selDataset").html("")
    sortYears.forEach(year => d3.select('#selDataset').append('option').text(year).property("value", year));

//Using the create function that will apply once the option has changed
d3.selectAll("#selDataset").on('change',buildPlot);
//Creating a function that builds the new plot. 
function buildPlot(){


        // Use D3 to select the current ID and storing within a variable
        var dropdownmenu = d3.selectAll("#selDataset");        
        var currentyear = dropdownmenu.property("value");
        //currentyear = "2010"

        //filter the data for the current ID to get desired information
        // filtyear = data.filter(entry => entry.year == currentyear);
        // console.log('Stuff',filtyear)

        January = data.filter(entry => entry.month == 1 && entry.year == currentyear);
        console.log('Jan',January)
        var JanDom = January.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(January.length||1)
        var JanInt = January.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(January.length||1)
        var JanRun = January.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(January.length||1)
        var JanSd =  January.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var JanSi = January.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        February = data.filter(entry => entry.month == 2 && entry.year == currentyear);
        console.log('Feb',February)

        var FebDom = February.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(February.length||1)
        var FebInt = February.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(February.length||1)
        var FebRun = February.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(February.length||1)
        var FebSd = February.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var FebSi = February.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        March = data.filter(entry => entry.month == 3 && entry.year == currentyear);
        console.log('Mar',March)
        
        var MarDom = March.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(March.length||1)
        var MarInt = March.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(March.length||1)
        var MarRun = March.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(March.length||1)
        var MarSd = March.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var MarSi = March.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        April = data.filter(entry => entry.month == 4 && entry.year == currentyear);
        console.log('Apr',April)
        
        var AprDom = April.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(April.length||1)
        var AprInt = April.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(April.length||1)
        var AprRun = April.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(April.length||1)
        var AprSd = April.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var AprSi = April.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        May = data.filter(entry => entry.month == 5 && entry.year == currentyear);
        console.log('May',May)
        
        var MayDom = May.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(May.length||1)
        var MayInt = May.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(May.length||1)
        var MayRun = May.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(May.length||1)
        var MaySd = May.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var MaySi = May.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        June = data.filter(entry => entry.month == 6 && entry.year == currentyear);
        console.log('June',June)
        
        var JunDom = June.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(June.length||1)
        var JunInt = June.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(June.length||1)
        var JunRun = June.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(June.length||1)
        var JunSd = June.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var JunSi = June.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        July = data.filter(entry => entry.month == 7 && entry.year == currentyear);
        console.log('July',July)

        var JulDom = July.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(July.length||1)
        var JulInt = July.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(July.length||1)
        var JulRun = July.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(July.length||1)
        var JulSd = July.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var JulSi = July.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        August = data.filter(entry => entry.month == 8 && entry.year == currentyear);
        console.log('Aug',August)
        
        var AugDom = August.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(August.length||1)
        var AugInt = August.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(August.length||1)
        var AugRun = August.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(August.length||1)
        var AugSd = August.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var AugSi = August.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        September = data.filter(entry => entry.month == 9 && entry.year == currentyear);
        console.log('Sep',September)
        
        var SepDom = September.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(September.length||1)
        var SepInt = September.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(September.length||1)
        var SepRun = September.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(September.length||1)
        var SepSd = September.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var SepSi  = September.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        October = data.filter(entry => entry.month == 10 && entry.year == currentyear);
        console.log('Oct',October)
        
        var OctDom = October.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(October.length||1)
        var OctInt = October.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(October.length||1)
        var OctRun = October.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(October.length||1)
        var OctSd = October.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var OctSi = October.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        November = data.filter(entry => entry.month == 11 && entry.year == currentyear);
        console.log('Nov',November)
        
        var NovDom = November.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(November.length||1)
        var NovInt = November.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(November.length||1)
        var NovRun = November.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(November.length||1)
        var NovSd = November.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)
        var NovSi = November.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)

        December = data.filter(entry => entry.month == 12 && entry.year == currentyear);
        console.log('Dec',December)

        var DecDom = December.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)/(December.length||1)
        var DecInt = December.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)/(December.length||1)
        var DecRun = December.map(i => i.movie_runtime).reduce(function(sum, a) { return sum + a },0)/(December.length||1)
        var DecSd = December.map(i => i.domestic_sales).reduce(function(sum, a) { return sum + a },0)   
        var DecSi = December.map(i => i.international_sales).reduce(function(sum, a) { return sum + a },0)        
        
        var TotalDom = [JanSd,FebSd,MarSd, AprSd, MaySd, JunSd, JulSd, AugSd,SepSd,OctSd,NovSd,DecSd].reduce(function(sum, a) { return sum + a },0)  
        var TotalInt = [JanSi,FebSi,MarSi, AprSi, MaySi, JunSi, JulSi, AugSi,SepSi,OctSi,NovSi,DecSi].reduce(function(sum, a) { return sum + a },0)  
        console.log(TotalDom, TotalInt)



        // making Trace for the horizontal bar chart


        var Domestic_Monthly = {
            x: ['January','February', 'March','April','May','June','July','August','September','October','November','December'],
            y: [JanDom,FebDom,MarDom, AprDom, MayDom, JunDom, JulDom, AugDom,SepDom,OctDom,NovDom,DecDom],
            name: 'Average Domestic Monthly',
            type:"scatter",
        };
    
        var International_Monthly ={
            x: ['January','February', 'March','April','May','June','July','August','September','October','November','December'],
            y: [JanInt,FebInt,MarInt, AprInt, MayInt, JunInt, JulInt, AugInt,SepInt,OctInt,NovInt,DecInt],
            name: 'Average International Monthly',
            type:"scatter",
        };
      
        // data
        var dataPlot = [Domestic_Monthly,International_Monthly];

        // Layout
        var layout = {
            title : 'Average Domestic Vs International Sales Over The Year'
        };

        
        
        // Use plotly to create a new bar
        Plotly.newPlot("line", dataPlot, layout);

        // Creating the trace for the bubble chart
        var trace2 ={
            x: ['January','February', 'March','April','May','June','July','August','September','October','November','December'],
            
            y: [JanRun,FebRun,MarRun, AprRun, MayRun, JunRun, JulRun, AugRun,SepRun,OctRun,NovRun,DecRun],
            mode:'scatter'
        }

        var data2 = [trace2]

        //creating the layout for the bubble chart
        var layout2 = {
            title : 'Average Movie Runtime Over The Year',
            showlegend : false, 
        }

        //plotting with plotly
        Plotly.newPlot('line2', data2, layout2)

        var trace3 ={
            values: [TotalDom,TotalInt],
            labels: ['Total Domestic Sales','Total International Sales'],
            type: "pie",
        }

        var data3 = [trace3]

        var layout3 = {
            title: 'Total Domestic Vs International Sales in The Year',
            height: 600,
            width:600
            }
          

        Plotly.newPlot('pie', data3, layout3);


    };
});

//run init to set the main page
init();