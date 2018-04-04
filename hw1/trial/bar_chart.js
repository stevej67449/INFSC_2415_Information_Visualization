(function() {
    
    var chart = d3.select('.chart');
    
    d3.tsv("2015_states_poverty.tsv", function(data) {
        
        
    //Population Parameter
        // Convert tsv input to integer
        data.forEach(function(d) {
            d.povPercent = +d.povPercent;
        }); 
        
        
        /* 
        // Find highest Population value   
        var maxVal = d3.max(data, function(d){   
           return d.totalPop; 
        });
        
        var bar = chart.selectAll("div")
            .data(data)
            .enter().append("div")
            .attr("class", "bar")
            .style("width", function (d) {
                return Number((d.totalPop/maxVal) * 100) + '%';
            })
        */
        
        // Sort by Poverty Precentage (Potential onClick sort)
        data.sort(function(a,b) {
            return Number(b.povPercent) - Number(a.povPercent);
        })
        
        var bar = chart.selectAll("div")
            .data(data)
            .enter().append("div")
            .attr("class", "bar")
            .style("width", function (d) {
                return Number(d.povPercent) + '%';
            });
        
            // Show Percentage on bar
            bar.append("span")
                .attr("class", "label")
                .text(function (d) {
                    return d.povPercent;
                });
            
            // Show State name on bar
            bar.append("span")
                .attr("class", "name")
                .text(function (d) {
                    return d.state;
                });
                    
            
        
        });
    
}) ();