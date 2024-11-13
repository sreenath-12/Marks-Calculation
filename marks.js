function calculateResult() {
    let jav, sql, html, reactjs, tot, avg, grd;

    // Get input values
    jav = +document.getElementById('jav').value;
    sql = +document.getElementById('sql').value;
    html = +document.getElementById('html').value;
    reactjs = +document.getElementById('reactjs').value;

    // Calculate total and average
    tot = jav + sql + html + reactjs;
    avg = tot / 4;

    // Determine grade
    if (jav > 39 && sql > 39 && html > 39 && reactjs > 39) {
        grd = avg >= 90 ? 'A+' :
              avg >= 80 ? 'A'  :
              avg >= 70 ? 'B+' :
              avg >= 60 ? 'B'  :
              avg >= 50 ? 'C'  :
                          'D';
    } else {
        grd = "Fail";
    }

    // Display result
    document.getElementById('output').innerHTML = 
        "<p>Total: " + tot + "</p>" +
        "<p>Average: " + avg + "</p>" +
        "<p>Grade: " + grd + "</p>";
}
