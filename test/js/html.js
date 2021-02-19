const doc = document.div
const div = document.createElement('html')
div.innerHTML = `<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<title>GOTD Idle</title>
</head>
<body>
<div>
<div id='top'>
    <p style="display: inline-block;">You have </p><span id='games'> 1 </span><p  style="display: inline-block;"> game(s) of the day</p><br>
    <span style="display: inline-block; font-size: small;">You are getting <span id='gps'> 0 </span>game(s) per second</span>
    <div id='nav'>
        <button onclick="showTab('main')">MAIN</button><button onclick="showTab('other')">OTHER</button>
    </div>
</div>
<div id=tabs>
    <div id='main' class="tab">
        <button style="overflow: hidden; width: 150px; float: left;" onclick="buy('yhvr')">
            <h4>Yhvr</h4>
            <p>Very slow at finding games</p>
            <p>Cost: <span id='yhvrC'>1</span> game(s)</p>
            <p>You have <span id='yhvr'>0</span> Yhvr(s) producing <span id='yhvrP'>0</span> games per second</p>
        </button>
    </div>
    <div id='other' class="tab" style="display: none;">
        other
    </div>
</div>
</div>
</body>`
doc.append(div)
