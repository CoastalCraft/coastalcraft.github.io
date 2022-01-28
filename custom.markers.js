/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        {
            x: 0,
            z: 0,
            minmapzoom: 2,
            maxmapzoom: 5,
            text: "Spawn Portal\n\uf557",
            textColor: "#a839a3",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 20px 'Font Awesome 5 Free'",
        },
        {
            x: 560,
            z: -240,
            minmapzoom: 2,
            maxmapzoom: 5,
            text: "North Spawn Portal\n\uf557",
            textColor: "#a839a3",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 20px 'Font Awesome 5 Free'",
        },
        {
            x: 480,
            z: 400,
            minmapzoom: 2,
            maxmapzoom: 5,
            text: "East Spawn Portal\n\uf557",
            textColor: "#a839a3",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 20px 'Font Awesome 5 Free'",
        },
        {
            x: 130,
            z: -15,
            minmapzoom: 3,
            maxmapzoom: 5,
            text: "Tree Farm\n\uf1bb",
            textColor: "#0be016",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 20px 'Font Awesome 5 Free'",
        },
        {
            x: 115,
            z: 78,
            minmapzoom: 2,
            maxmapzoom: 5,
            text: "\uf13d\nSpawn Ship",
            textColor: "#14959e",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 20px 'Font Awesome 5 Free'",
        },
        {
            x: 70,
            z: 32,
            minmapzoom: 3,
            maxmapzoom: 5,
            text: "\uf13d\nTim, Tom, Tam\n\uf51e,\uf522",
            textColor: "#14959e",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 12px 'Font Awesome 5 Free'",
        },
        {
            x: 6,
            z: 67,
            minmapzoom: 2,
            maxmapzoom: 5,
            text: "\uf13d\nEvent Ship",
            textColor: "#14959e",
            strokeColor: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            font: "italic 900 12px 'Font Awesome 5 Free'",
        }
        
    ]
}
