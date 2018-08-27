webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\n@import url('https://fonts.googleapis.com/css?family=Questrial|Raleway|Source+Sans+Pro');\n\n.mapboxgl-map {\n    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    overflow: hidden;\n    position: relative;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.mapboxgl-map:-webkit-full-screen {\n    width: 100%;\n    height: 100%;\n}\n\n.mapboxgl-missing-css {\n    display: none;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive,\n.mapboxgl-ctrl-nav-compass {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive:active,\n.mapboxgl-ctrl-nav-compass:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas {\n    -ms-touch-action: pan-x pan-y;\n        touch-action: pan-x pan-y;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    -ms-touch-action: pinch-zoom;\n        touch-action: pinch-zoom;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    -ms-touch-action: none;\n        touch-action: none;\n}\n\n.mapboxgl-ctrl-top-left,\n.mapboxgl-ctrl-top-right,\n.mapboxgl-ctrl-bottom-left,\n.mapboxgl-ctrl-bottom-right { position: absolute; pointer-events: none; z-index: 2; }\n\n.mapboxgl-ctrl-top-left     { top: 0; left: 0; }\n\n.mapboxgl-ctrl-top-right    { top: 0; right: 0; }\n\n.mapboxgl-ctrl-bottom-left  { bottom: 0; left: 0; }\n\n.mapboxgl-ctrl-bottom-right { right: 0; bottom: 0; }\n\n.mapboxgl-ctrl { clear: both; pointer-events: auto; }\n\n.mapboxgl-ctrl-top-left .mapboxgl-ctrl     { margin: 10px 0 0 10px; float: left; }\n\n.mapboxgl-ctrl-top-right .mapboxgl-ctrl    { margin: 10px 10px 0 0; float: right; }\n\n.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl  { margin: 0 0 10px 10px; float: left; }\n\n.mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin: 0 10px 10px 0; float: right; }\n\n.mapboxgl-ctrl-group {\n    border-radius: 4px;\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    background: #fff;\n}\n\n.mapboxgl-ctrl-group > button {\n    width: 30px;\n    height: 30px;\n    display: block;\n    padding: 0;\n    outline: none;\n    border: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.mapboxgl-ctrl-group > button + button {\n    border-top: 1px solid #ddd;\n}\n\n/* https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */\n\n.mapboxgl-ctrl > button::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n.mapboxgl-ctrl > button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-ctrl-icon,\n.mapboxgl-ctrl-icon > .mapboxgl-ctrl-compass-arrow {\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.mapboxgl-ctrl-icon {\n    padding: 5px;\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27m%207%2C9%20c%20-0.554%2C0%20-1%2C0.446%20-1%2C1%200%2C0.554%200.446%2C1%201%2C1%20l%206%2C0%20c%200.554%2C0%201%2C-0.446%201%2C-1%200%2C-0.554%20-0.446%2C-1%20-1%2C-1%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27M%2010%206%20C%209.446%206%209%206.4459904%209%207%20L%209%209%20L%207%209%20C%206.446%209%206%209.446%206%2010%20C%206%2010.554%206.446%2011%207%2011%20L%209%2011%20L%209%2013%20C%209%2013.55401%209.446%2014%2010%2014%20C%2010.554%2014%2011%2013.55401%2011%2013%20L%2011%2011%20L%2013%2011%20C%2013.554%2011%2014%2010.554%2014%2010%20C%2014%209.446%2013.554%209%2013%209%20L%2011%209%20L%2011%207%20C%2011%206.4459904%2010.554%206%2010%206%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%23333%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate:disabled {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%23aaa%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%2333b5e5%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%23e58978%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%2333b5e5%3B%27%20d%3D%27M%2010%2C4%20C%209%2C4%209%2C5%209%2C5%20L%209%2C5.1%20C%207.0357113%2C5.5006048%205.5006048%2C7.0357113%205.1%2C9%20L%205%2C9%20c%200%2C0%20-1%2C0%20-1%2C1%200%2C1%201%2C1%201%2C1%20l%200.1%2C0%20c%200.4006048%2C1.964289%201.9357113%2C3.499395%203.9%2C3.9%20L%209%2C15%20c%200%2C0%200%2C1%201%2C1%201%2C0%201%2C-1%201%2C-1%20l%200%2C-0.1%20c%201.964289%2C-0.400605%203.499395%2C-1.935711%203.9%2C-3.9%20l%200.1%2C0%20c%200%2C0%201%2C0%201%2C-1%20C%2016%2C9%2015%2C9%2015%2C9%20L%2014.9%2C9%20C%2014.499395%2C7.0357113%2012.964289%2C5.5006048%2011%2C5.1%20L%2011%2C5%20c%200%2C0%200%2C-1%20-1%2C-1%20z%20m%200%2C2.5%20c%201.932997%2C0%203.5%2C1.5670034%203.5%2C3.5%200%2C1.932997%20-1.567003%2C3.5%20-3.5%2C3.5%20C%208.0670034%2C13.5%206.5%2C11.932997%206.5%2C10%206.5%2C8.0670034%208.0670034%2C6.5%2010%2C6.5%20Z%27%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23e54e33%3B%27%20d%3D%27M%2010%2C4%20C%209%2C4%209%2C5%209%2C5%20L%209%2C5.1%20C%207.0357113%2C5.5006048%205.5006048%2C7.0357113%205.1%2C9%20L%205%2C9%20c%200%2C0%20-1%2C0%20-1%2C1%200%2C1%201%2C1%201%2C1%20l%200.1%2C0%20c%200.4006048%2C1.964289%201.9357113%2C3.499395%203.9%2C3.9%20L%209%2C15%20c%200%2C0%200%2C1%201%2C1%201%2C0%201%2C-1%201%2C-1%20l%200%2C-0.1%20c%201.964289%2C-0.400605%203.499395%2C-1.935711%203.9%2C-3.9%20l%200.1%2C0%20c%200%2C0%201%2C0%201%2C-1%20C%2016%2C9%2015%2C9%2015%2C9%20L%2014.9%2C9%20C%2014.499395%2C7.0357113%2012.964289%2C5.5006048%2011%2C5.1%20L%2011%2C5%20c%200%2C0%200%2C-1%20-1%2C-1%20z%20m%200%2C2.5%20c%201.932997%2C0%203.5%2C1.5670034%203.5%2C3.5%200%2C1.932997%20-1.567003%2C3.5%20-3.5%2C3.5%20C%208.0670034%2C13.5%206.5%2C11.932997%206.5%2C10%206.5%2C8.0670034%208.0670034%2C6.5%2010%2C6.5%20Z%27%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting {\n    -webkit-animation: mapboxgl-spin 2s infinite linear;\n    animation: mapboxgl-spin 2s infinite linear;\n}\n\n@-webkit-keyframes mapboxgl-spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes mapboxgl-spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-fullscreen {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMCAyMCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZnVsbHNjcmVlbi5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQxODUiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnM0MTgzIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ3MSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2OTUiCiAgICAgaWQ9Im5hbWVkdmlldzQxODEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjExLjMxMzcwOCIKICAgICBpbmtzY2FwZTpjeD0iMTQuNjk4MjgiCiAgICAgaW5rc2NhcGU6Y3k9IjEwLjUyNjY4OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjk3IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+PGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNjA3NiIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz48cGF0aAogICAgIGQ9Ik0gNSA0IEMgNC41IDQgNCA0LjUgNCA1IEwgNCA2IEwgNCA5IEwgNC41IDkgTCA1Ljc3NzM0MzggNy4yOTY4NzUgQyA2Ljc3NzEzMTkgOC4wNjAyMTMxIDcuODM1NzY1IDguOTU2NTcyOCA4Ljg5MDYyNSAxMCBDIDcuODI1NzEyMSAxMS4wNjMzIDYuNzc2MTc5MSAxMS45NTE2NzUgNS43ODEyNSAxMi43MDcwMzEgTCA0LjUgMTEgTCA0IDExIEwgNCAxNSBDIDQgMTUuNSA0LjUgMTYgNSAxNiBMIDkgMTYgTCA5IDE1LjUgTCA3LjI3MzQzNzUgMTQuMjA1MDc4IEMgOC4wNDI4OTMxIDEzLjE4Nzg4NiA4LjkzOTU0NDEgMTIuMTMzNDgxIDkuOTYwOTM3NSAxMS4wNjgzNTkgQyAxMS4wNDIzNzEgMTIuMTQ2OTkgMTEuOTQyMDkzIDEzLjIxMTIgMTIuNzA3MDMxIDE0LjIxODc1IEwgMTEgMTUuNSBMIDExIDE2IEwgMTQgMTYgTCAxNSAxNiBDIDE1LjUgMTYgMTYgMTUuNSAxNiAxNSBMIDE2IDE0IEwgMTYgMTEgTCAxNS41IDExIEwgMTQuMjA1MDc4IDEyLjcyNjU2MiBDIDEzLjE3Nzk4NSAxMS45NDk2MTcgMTIuMTEyNzE4IDExLjA0MzU3NyAxMS4wMzcxMDkgMTAuMDA5NzY2IEMgMTIuMTUxODU2IDguOTgxMDYxIDEzLjIyNDM0NSA4LjA3OTg2MjQgMTQuMjI4NTE2IDcuMzA0Njg3NSBMIDE1LjUgOSBMIDE2IDkgTCAxNiA1IEMgMTYgNC41IDE1LjUgNCAxNSA0IEwgMTEgNCBMIDExIDQuNSBMIDEyLjcwMzEyNSA1Ljc3NzM0MzggQyAxMS45MzI2NDcgNi43ODY0ODM0IDExLjAyNjY5MyA3Ljg1NTQ3MTIgOS45NzA3MDMxIDguOTE5OTIxOSBDIDguOTU4NDczOSA3LjgyMDQ5NDMgOC4wNjk4NzY3IDYuNzYyNzE4OCA3LjMwNDY4NzUgNS43NzE0ODQ0IEwgOSA0LjUgTCA5IDQgTCA2IDQgTCA1IDQgeiAiCiAgICAgaWQ9InBhdGg0MTY5IiAvPjwvc3ZnPg==\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-shrink {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMCAyMCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic2hyaW5rLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjIwMjEiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTA4IgogICAgIGlkPSJuYW1lZHZpZXcxNSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMSIKICAgICBpbmtzY2FwZTpjeD0iNC45NTAxMDgyIgogICAgIGlua3NjYXBlOmN5PSIxMC44NTQ3NDciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveC1lZGdlLW1pZHBvaW50cz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveC1taWRwb2ludHM9InRydWUiCiAgICAgaW5rc2NhcGU6b2JqZWN0LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+PGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNDE0NyIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz48cGF0aAogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDAiCiAgICAgZD0iTSA0LjI0MjE4NzUgMy40OTIxODc1IEEgMC43NTAwNzUgMC43NTAwNzUgMCAwIDAgMy43MTg3NSA0Ljc4MTI1IEwgNS45NjQ4NDM4IDcuMDI3MzQzOCBMIDQgOC41IEwgNCA5IEwgOCA5IEMgOC41MDAwMDEgOC45OTk5OTg4IDkgOC40OTk5OTkyIDkgOCBMIDkgNCBMIDguNSA0IEwgNy4wMTc1NzgxIDUuOTU1MDc4MSBMIDQuNzgxMjUgMy43MTg3NSBBIDAuNzUwMDc1IDAuNzUwMDc1IDAgMCAwIDQuMjQyMTg3NSAzLjQ5MjE4NzUgeiBNIDE1LjczNDM3NSAzLjQ5MjE4NzUgQSAwLjc1MDA3NSAwLjc1MDA3NSAwIDAgMCAxNS4yMTg3NSAzLjcxODc1IEwgMTIuOTg0Mzc1IDUuOTUzMTI1IEwgMTEuNSA0IEwgMTEgNCBMIDExIDggQyAxMSA4LjQ5OTk5OTIgMTEuNDk5OTk5IDguOTk5OTk4OCAxMiA5IEwgMTYgOSBMIDE2IDguNSBMIDE0LjAzNTE1NiA3LjAyNzM0MzggTCAxNi4yODEyNSA0Ljc4MTI1IEEgMC43NTAwNzUgMC43NTAwNzUgMCAwIDAgMTUuNzM0Mzc1IDMuNDkyMTg3NSB6IE0gNCAxMSBMIDQgMTEuNSBMIDUuOTY0ODQzOCAxMi45NzI2NTYgTCAzLjcxODc1IDE1LjIxODc1IEEgMC43NTEzMDA5NiAwLjc1MTMwMDk2IDAgMSAwIDQuNzgxMjUgMTYuMjgxMjUgTCA3LjAyNzM0MzggMTQuMDM1MTU2IEwgOC41IDE2IEwgOSAxNiBMIDkgMTIgQyA5IDExLjUwMDAwMSA4LjUwMDAwMSAxMS4wMDAwMDEgOCAxMSBMIDQgMTEgeiBNIDEyIDExIEMgMTEuNDk5OTk5IDExLjAwMDAwMSAxMSAxMS41MDAwMDEgMTEgMTIgTCAxMSAxNiBMIDExLjUgMTYgTCAxMi45NzI2NTYgMTQuMDM1MTU2IEwgMTUuMjE4NzUgMTYuMjgxMjUgQSAwLjc1MTMwMDk2IDAuNzUxMzAwOTYgMCAxIDAgMTYuMjgxMjUgMTUuMjE4NzUgTCAxNC4wMzUxNTYgMTIuOTcyNjU2IEwgMTYgMTEuNSBMIDE2IDExIEwgMTIgMTEgeiAiCiAgICAgaWQ9InBhdGg3IiAvPjwvc3ZnPg==\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > .mapboxgl-ctrl-compass-arrow {\n    width: 20px;\n    height: 20px;\n    margin: 5px;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%0A%09%3Cpolygon%20fill%3D%27%23333333%27%20points%3D%276%2C9%2010%2C1%2014%2C9%27%2F%3E%0A%09%3Cpolygon%20fill%3D%27%23CCCCCC%27%20points%3D%276%2C11%2010%2C19%2014%2C11%20%27%2F%3E%0A%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    display: inline-block;\n}\n\na.mapboxgl-ctrl-logo {\n    width: 85px;\n    height: 21px;\n    margin: 0 0 -3px -3px;\n    display: block;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiAgIHZpZXdCb3g9IjAgMCA4NC40OSAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODQuNDkgMjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz4gIDxwYXRoIGNsYXNzPSJzdDAiIHN0eWxlPSJvcGFjaXR5OjAuOTsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiIGQ9Ik04My4yNSwxNC4yNmMwLDAuMTItMC4wOSwwLjIxLTAuMjEsMC4yMWgtMS42MWMtMC4xMywwLTAuMjQtMC4wNi0wLjMtMC4xN2wtMS40NC0yLjM5bC0xLjQ0LDIuMzkgICAgYy0wLjA2LDAuMTEtMC4xOCwwLjE3LTAuMywwLjE3aC0xLjYxYy0wLjA0LDAtMC4wOC0wLjAxLTAuMTItMC4wM2MtMC4wOS0wLjA2LTAuMTMtMC4xOS0wLjA2LTAuMjhsMCwwbDIuNDMtMy42OEw3Ni4yLDYuODQgICAgYy0wLjAyLTAuMDMtMC4wMy0wLjA3LTAuMDMtMC4xMmMwLTAuMTIsMC4wOS0wLjIxLDAuMjEtMC4yMWgxLjYxYzAuMTMsMCwwLjI0LDAuMDYsMC4zLDAuMTdsMS40MSwyLjM2bDEuNC0yLjM1ICAgIGMwLjA2LTAuMTEsMC4xOC0wLjE3LDAuMy0wLjE3SDgzYzAuMDQsMCwwLjA4LDAuMDEsMC4xMiwwLjAzYzAuMDksMC4wNiwwLjEzLDAuMTksMC4wNiwwLjI4bDAsMGwtMi4zNywzLjYzbDIuNDMsMy42NyAgICBDODMuMjQsMTQuMTgsODMuMjUsMTQuMjIsODMuMjUsMTQuMjZ6Ii8+ICA8cGF0aCBjbGFzcz0ic3QwIiBzdHlsZT0ib3BhY2l0eTowLjk7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7IiBkPSJNNjYuMjQsOS41OWMtMC4zOS0xLjg4LTEuOTYtMy4yOC0zLjg0LTMuMjhjLTEuMDMsMC0yLjAzLDAuNDItMi43MywxLjE4VjMuNTFjMC0wLjEzLTAuMS0wLjIzLTAuMjMtMC4yM2gtMS40ICAgIGMtMC4xMywwLTAuMjMsMC4xMS0wLjIzLDAuMjN2MTAuNzJjMCwwLjEzLDAuMSwwLjIzLDAuMjMsMC4yM2gxLjRjMC4xMywwLDAuMjMtMC4xMSwwLjIzLTAuMjNWMTMuNWMwLjcxLDAuNzUsMS43LDEuMTgsMi43MywxLjE4ICAgIGMxLjg4LDAsMy40NS0xLjQxLDMuODQtMy4yOUM2Ni4zNywxMC43OSw2Ni4zNywxMC4xOCw2Ni4yNCw5LjU5TDY2LjI0LDkuNTl6IE02Mi4wOCwxM2MtMS4zMiwwLTIuMzktMS4xMS0yLjQxLTIuNDh2LTAuMDYgICAgYzAuMDItMS4zOCwxLjA5LTIuNDgsMi40MS0yLjQ4czIuNDIsMS4xMiwyLjQyLDIuNTFTNjMuNDEsMTMsNjIuMDgsMTN6Ii8+ICA8cGF0aCBjbGFzcz0ic3QwIiBzdHlsZT0ib3BhY2l0eTowLjk7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7IiBkPSJNNzEuNjcsNi4zMmMtMS45OC0wLjAxLTMuNzIsMS4zNS00LjE2LDMuMjljLTAuMTMsMC41OS0wLjEzLDEuMTksMCwxLjc3YzAuNDQsMS45NCwyLjE3LDMuMzIsNC4xNywzLjMgICAgYzIuMzUsMCw0LjI2LTEuODcsNC4yNi00LjE5Uzc0LjA0LDYuMzIsNzEuNjcsNi4zMnogTTcxLjY1LDEzLjAxYy0xLjMzLDAtMi40Mi0xLjEyLTIuNDItMi41MXMxLjA4LTIuNTIsMi40Mi0yLjUyICAgIGMxLjMzLDAsMi40MiwxLjEyLDIuNDIsMi41MVM3Mi45OSwxMyw3MS42NSwxMy4wMUw3MS42NSwxMy4wMXoiLz4gIDxwYXRoIGNsYXNzPSJzdDEiIHN0eWxlPSJvcGFjaXR5OjAuMzU7IGVuYWJsZS1iYWNrZ3JvdW5kOm5ldzsiIGQ9Ik02Mi4wOCw3Ljk4Yy0xLjMyLDAtMi4zOSwxLjExLTIuNDEsMi40OHYwLjA2QzU5LjY4LDExLjksNjAuNzUsMTMsNjIuMDgsMTNzMi40Mi0xLjEyLDIuNDItMi41MSAgICBTNjMuNDEsNy45OCw2Mi4wOCw3Ljk4eiBNNjIuMDgsMTEuNzZjLTAuNjMsMC0xLjE0LTAuNTYtMS4xNy0xLjI1di0wLjA0YzAuMDEtMC42OSwwLjU0LTEuMjUsMS4xNy0xLjI1ICAgIGMwLjYzLDAsMS4xNywwLjU3LDEuMTcsMS4yN0M2My4yNCwxMS4yLDYyLjczLDExLjc2LDYyLjA4LDExLjc2eiIvPiAgPHBhdGggY2xhc3M9InN0MSIgc3R5bGU9Im9wYWNpdHk6MC4zNTsgZW5hYmxlLWJhY2tncm91bmQ6bmV3OyIgZD0iTTcxLjY1LDcuOThjLTEuMzMsMC0yLjQyLDEuMTItMi40MiwyLjUxUzcwLjMyLDEzLDcxLjY1LDEzczIuNDItMS4xMiwyLjQyLTIuNTFTNzIuOTksNy45OCw3MS42NSw3Ljk4eiAgICAgTTcxLjY1LDExLjc2Yy0wLjY0LDAtMS4xNy0wLjU3LTEuMTctMS4yN2MwLTAuNywwLjUzLTEuMjYsMS4xNy0xLjI2czEuMTcsMC41NywxLjE3LDEuMjdDNzIuODIsMTEuMjEsNzIuMjksMTEuNzYsNzEuNjUsMTEuNzZ6IiAgICAvPiAgPHBhdGggY2xhc3M9InN0MCIgc3R5bGU9Im9wYWNpdHk6MC45OyBmaWxsOiAjRkZGRkZGOyBlbmFibGUtYmFja2dyb3VuZDogbmV3OyIgZD0iTTQ1Ljc0LDYuNTNoLTEuNGMtMC4xMywwLTAuMjMsMC4xMS0wLjIzLDAuMjN2MC43M2MtMC43MS0wLjc1LTEuNy0xLjE4LTIuNzMtMS4xOCAgICBjLTIuMTcsMC0zLjk0LDEuODctMy45NCw0LjE5czEuNzcsNC4xOSwzLjk0LDQuMTljMS4wNCwwLDIuMDMtMC40MywyLjczLTEuMTl2MC43M2MwLDAuMTMsMC4xLDAuMjMsMC4yMywwLjIzaDEuNCAgICBjMC4xMywwLDAuMjMtMC4xMSwwLjIzLTAuMjNWNi43NGMwLTAuMTItMC4wOS0wLjIyLTAuMjItMC4yMkM0NS43NSw2LjUzLDQ1Ljc1LDYuNTMsNDUuNzQsNi41M3ogTTQ0LjEyLDEwLjUzICAgIEM0NC4xMSwxMS45LDQzLjAzLDEzLDQxLjcxLDEzcy0yLjQyLTEuMTItMi40Mi0yLjUxczEuMDgtMi41MiwyLjQtMi41MmMxLjMzLDAsMi4zOSwxLjExLDIuNDEsMi40OEw0NC4xMiwxMC41M3oiLz4gIDxwYXRoIGNsYXNzPSJzdDEiIHN0eWxlPSJvcGFjaXR5OjAuMzU7IGVuYWJsZS1iYWNrZ3JvdW5kOm5ldzsiIGQ9Ik00MS43MSw3Ljk4Yy0xLjMzLDAtMi40MiwxLjEyLTIuNDIsMi41MVM0MC4zNywxMyw0MS43MSwxM3MyLjM5LTEuMTEsMi40MS0yLjQ4di0wLjA2ICAgIEM0NC4xLDkuMDksNDMuMDMsNy45OCw0MS43MSw3Ljk4eiBNNDAuNTUsMTAuNDljMC0wLjcsMC41Mi0xLjI3LDEuMTctMS4yN2MwLjY0LDAsMS4xNCwwLjU2LDEuMTcsMS4yNXYwLjA0ICAgIGMtMC4wMSwwLjY4LTAuNTMsMS4yNC0xLjE3LDEuMjRDNDEuMDgsMTEuNzUsNDAuNTUsMTEuMTksNDAuNTUsMTAuNDl6Ii8+ICA8cGF0aCBjbGFzcz0ic3QwIiBzdHlsZT0ib3BhY2l0eTowLjk7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7IiBkPSJNNTIuNDEsNi4zMmMtMS4wMywwLTIuMDMsMC40Mi0yLjczLDEuMThWNi43NWMwLTAuMTMtMC4xLTAuMjMtMC4yMy0wLjIzaC0xLjRjLTAuMTMsMC0wLjIzLDAuMTEtMC4yMywwLjIzICAgIHYxMC43MmMwLDAuMTMsMC4xLDAuMjMsMC4yMywwLjIzaDEuNGMwLjEzLDAsMC4yMy0wLjEsMC4yMy0wLjIzVjEzLjVjMC43MSwwLjc1LDEuNywxLjE4LDIuNzQsMS4xOGMyLjE3LDAsMy45NC0xLjg3LDMuOTQtNC4xOSAgICBTNTQuNTgsNi4zMiw1Mi40MSw2LjMyeiBNNTIuMDgsMTMuMDFjLTEuMzIsMC0yLjM5LTEuMTEtMi40Mi0yLjQ4di0wLjA3YzAuMDItMS4zOCwxLjA5LTIuNDksMi40LTIuNDljMS4zMiwwLDIuNDEsMS4xMiwyLjQxLDIuNTEgICAgUzUzLjQsMTMsNTIuMDgsMTMuMDFMNTIuMDgsMTMuMDF6Ii8+ICA8cGF0aCBjbGFzcz0ic3QxIiBzdHlsZT0ib3BhY2l0eTowLjM1OyBlbmFibGUtYmFja2dyb3VuZDpuZXc7IiBkPSJNNTIuMDgsNy45OGMtMS4zMiwwLTIuMzksMS4xMS0yLjQyLDIuNDh2MC4wNmMwLjAzLDEuMzgsMS4xLDIuNDgsMi40MiwyLjQ4czIuNDEtMS4xMiwyLjQxLTIuNTEgICAgUzUzLjQsNy45OCw1Mi4wOCw3Ljk4eiBNNTIuMDgsMTEuNzZjLTAuNjMsMC0xLjE0LTAuNTYtMS4xNy0xLjI1di0wLjA0YzAuMDEtMC42OSwwLjU0LTEuMjUsMS4xNy0xLjI1YzAuNjMsMCwxLjE3LDAuNTgsMS4xNywxLjI3ICAgIFM1Mi43MiwxMS43Niw1Mi4wOCwxMS43NnoiLz4gIDxwYXRoIGNsYXNzPSJzdDAiIHN0eWxlPSJvcGFjaXR5OjAuOTsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiIGQ9Ik0zNi4wOCwxNC4yNGMwLDAuMTMtMC4xLDAuMjMtMC4yMywwLjIzaC0xLjQxYy0wLjEzLDAtMC4yMy0wLjExLTAuMjMtMC4yM1Y5LjY4YzAtMC45OC0wLjc0LTEuNzEtMS42Mi0xLjcxICAgIGMtMC44LDAtMS40NiwwLjctMS41OSwxLjYybDAuMDEsNC42NmMwLDAuMTMtMC4xMSwwLjIzLTAuMjMsMC4yM2gtMS40MWMtMC4xMywwLTAuMjMtMC4xMS0wLjIzLTAuMjNWOS42OCAgICBjMC0wLjk4LTAuNzQtMS43MS0xLjYyLTEuNzFjLTAuODUsMC0xLjU0LDAuNzktMS42LDEuOHY0LjQ4YzAsMC4xMy0wLjEsMC4yMy0wLjIzLDAuMjNoLTEuNGMtMC4xMywwLTAuMjMtMC4xMS0wLjIzLTAuMjNWNi43NCAgICBjMC4wMS0wLjEzLDAuMS0wLjIyLDAuMjMtMC4yMmgxLjRjMC4xMywwLDAuMjIsMC4xMSwwLjIzLDAuMjJWNy40YzAuNS0wLjY4LDEuMy0xLjA5LDIuMTYtMS4xaDAuMDNjMS4wOSwwLDIuMDksMC42LDIuNiwxLjU1ICAgIGMwLjQ1LTAuOTUsMS40LTEuNTUsMi40NC0xLjU2YzEuNjIsMCwyLjkzLDEuMjUsMi45LDIuNzhMMzYuMDgsMTQuMjR6Ii8+ICA8cGF0aCBjbGFzcz0ic3QxIiBzdHlsZT0ib3BhY2l0eTowLjM1OyBlbmFibGUtYmFja2dyb3VuZDpuZXc7IiBkPSJNODQuMzQsMTMuNTlsLTAuMDctMC4xM2wtMS45Ni0yLjk5bDEuOTQtMi45NWMwLjQ0LTAuNjcsMC4yNi0xLjU2LTAuNDEtMi4wMmMtMC4wMiwwLTAuMDMsMC0wLjA0LTAuMDEgICAgYy0wLjIzLTAuMTUtMC41LTAuMjItMC43OC0wLjIyaC0xLjYxYy0wLjU2LDAtMS4wOCwwLjI5LTEuMzcsMC43OEw3OS43Miw2LjZsLTAuMzQtMC41NkM3OS4wOSw1LjU2LDc4LjU3LDUuMjcsNzgsNS4yN2gtMS42ICAgIGMtMC42LDAtMS4xMywwLjM3LTEuMzUsMC45MmMtMi4xOS0xLjY2LTUuMjgtMS40Ny03LjI2LDAuNDVjLTAuMzUsMC4zNC0wLjY1LDAuNzItMC44OSwxLjE0Yy0wLjktMS42Mi0yLjU4LTIuNzItNC41LTIuNzIgICAgYy0wLjUsMC0xLjAxLDAuMDctMS40OCwwLjIzVjMuNTFjMC0wLjgyLTAuNjYtMS40OC0xLjQ3LTEuNDhoLTEuNGMtMC44MSwwLTEuNDcsMC42Ni0xLjQ3LDEuNDd2My43NSAgICBjLTAuOTUtMS4zNi0yLjUtMi4xOC00LjE3LTIuMTljLTAuNzQsMC0xLjQ2LDAuMTYtMi4xMiwwLjQ3Yy0wLjI0LTAuMTctMC41NC0wLjI2LTAuODQtMC4yNmgtMS40Yy0wLjQ1LDAtMC44NywwLjIxLTEuMTUsMC41NiAgICBjLTAuMDItMC4wMy0wLjA0LTAuMDUtMC4wNy0wLjA4Yy0wLjI4LTAuMy0wLjY4LTAuNDctMS4wOS0wLjQ3aC0xLjM5Yy0wLjMsMC0wLjYsMC4wOS0wLjg0LDAuMjZjLTAuNjctMC4zLTEuMzktMC40Ni0yLjEyLTAuNDYgICAgYy0xLjgzLDAtMy40MywxLTQuMzcsMi41Yy0wLjItMC40Ni0wLjQ4LTAuODktMC44My0xLjI1Yy0wLjgtMC44MS0xLjg5LTEuMjUtMy4wMi0xLjI1aC0wLjAxYy0wLjg5LDAuMDEtMS43NSwwLjMzLTIuNDYsMC44OCAgICBjLTAuNzQtMC41Ny0xLjY0LTAuODgtMi41Ny0wLjg4SDI4LjFjLTAuMjksMC0wLjU4LDAuMDMtMC44NiwwLjExYy0wLjI4LDAuMDYtMC41NiwwLjE2LTAuODIsMC4yOGMtMC4yMS0wLjEyLTAuNDUtMC4xOC0wLjctMC4xOCAgICBoLTEuNGMtMC44MiwwLTEuNDcsMC42Ni0xLjQ3LDEuNDd2Ny41YzAsMC44MiwwLjY2LDEuNDcsMS40NywxLjQ3aDEuNGMwLjgyLDAsMS40OC0wLjY2LDEuNDgtMS40OGwwLDBWOS43OSAgICBjMC4wMy0wLjM2LDAuMjMtMC41OSwwLjM2LTAuNTljMC4xOCwwLDAuMzgsMC4xOCwwLjM4LDAuNDd2NC41N2MwLDAuODIsMC42NiwxLjQ3LDEuNDcsMS40N2gxLjQxYzAuODIsMCwxLjQ3LTAuNjYsMS40Ny0xLjQ3ICAgIGwtMC4wMS00LjU3YzAuMDYtMC4zMiwwLjI1LTAuNDcsMC4zNS0wLjQ3YzAuMTgsMCwwLjM4LDAuMTgsMC4zOCwwLjQ3djQuNTdjMCwwLjgyLDAuNjYsMS40NywxLjQ3LDEuNDdoMS40MSAgICBjMC44MiwwLDEuNDctMC42NiwxLjQ3LTEuNDd2LTAuMzhjMC45NiwxLjI5LDIuNDYsMi4wNiw0LjA2LDIuMDZjMC43NCwwLDEuNDYtMC4xNiwyLjEyLTAuNDdjMC4yNCwwLjE3LDAuNTQsMC4yNiwwLjg0LDAuMjZoMS4zOSAgICBjMC4zLDAsMC42LTAuMDksMC44NC0wLjI2djIuMDFjMCwwLjgyLDAuNjYsMS40NywxLjQ3LDEuNDdoMS40YzAuODIsMCwxLjQ3LTAuNjYsMS40Ny0xLjQ3di0xLjc3YzAuNDgsMC4xNSwwLjk5LDAuMjMsMS40OSwwLjIyICAgIGMxLjcsMCwzLjIyLTAuODcsNC4xNy0yLjJ2MC41MmMwLDAuODIsMC42NiwxLjQ3LDEuNDcsMS40N2gxLjRjMC4zLDAsMC42LTAuMDksMC44NC0wLjI2YzAuNjYsMC4zMSwxLjM5LDAuNDcsMi4xMiwwLjQ3ICAgIGMxLjkyLDAsMy42LTEuMSw0LjQ5LTIuNzNjMS41NCwyLjY1LDQuOTUsMy41Myw3LjU4LDEuOThjMC4xOC0wLjExLDAuMzYtMC4yMiwwLjUzLTAuMzZjMC4yMiwwLjU1LDAuNzYsMC45MSwxLjM1LDAuOUg3OCAgICBjMC41NiwwLDEuMDgtMC4yOSwxLjM3LTAuNzhsMC4zNy0wLjYxbDAuMzcsMC42MWMwLjI5LDAuNDgsMC44MSwwLjc4LDEuMzgsMC43OGgxLjZjMC44MSwwLDEuNDYtMC42NiwxLjQ1LTEuNDYgICAgQzg0LjQ5LDE0LjAyLDg0LjQ0LDEzLjgsODQuMzQsMTMuNTlMODQuMzQsMTMuNTl6IE0zNS44NiwxNC40N2gtMS40MWMtMC4xMywwLTAuMjMtMC4xMS0wLjIzLTAuMjNWOS42OCAgICBjMC0wLjk4LTAuNzQtMS43MS0xLjYyLTEuNzFjLTAuOCwwLTEuNDYsMC43LTEuNTksMS42MmwwLjAxLDQuNjZjMCwwLjEzLTAuMSwwLjIzLTAuMjMsMC4yM2gtMS40MWMtMC4xMywwLTAuMjMtMC4xMS0wLjIzLTAuMjMgICAgVjkuNjhjMC0wLjk4LTAuNzQtMS43MS0xLjYyLTEuNzFjLTAuODUsMC0xLjU0LDAuNzktMS42LDEuOHY0LjQ4YzAsMC4xMy0wLjEsMC4yMy0wLjIzLDAuMjNoLTEuNGMtMC4xMywwLTAuMjMtMC4xMS0wLjIzLTAuMjMgICAgVjYuNzRjMC4wMS0wLjEzLDAuMTEtMC4yMiwwLjIzLTAuMjJoMS40YzAuMTMsMCwwLjIyLDAuMTEsMC4yMywwLjIyVjcuNGMwLjUtMC42OCwxLjMtMS4wOSwyLjE2LTEuMWgwLjAzICAgIGMxLjA5LDAsMi4wOSwwLjYsMi42LDEuNTVjMC40NS0wLjk1LDEuNC0xLjU1LDIuNDQtMS41NmMxLjYyLDAsMi45MywxLjI1LDIuOSwyLjc4bDAuMDEsNS4xNkMzNi4wOSwxNC4zNiwzNS45OCwxNC40NiwzNS44NiwxNC40NyAgICBMMzUuODYsMTQuNDd6IE00NS45NywxNC4yNGMwLDAuMTMtMC4xLDAuMjMtMC4yMywwLjIzaC0xLjRjLTAuMTMsMC0wLjIzLTAuMTEtMC4yMy0wLjIzVjEzLjVjLTAuNywwLjc2LTEuNjksMS4xOC0yLjcyLDEuMTggICAgYy0yLjE3LDAtMy45NC0xLjg3LTMuOTQtNC4xOXMxLjc3LTQuMTksMy45NC00LjE5YzEuMDMsMCwyLjAyLDAuNDMsMi43MywxLjE4VjYuNzRjMC0wLjEzLDAuMS0wLjIzLDAuMjMtMC4yM2gxLjQgICAgYzAuMTItMC4wMSwwLjIyLDAuMDgsMC4yMywwLjIxYzAsMC4wMSwwLDAuMDEsMCwwLjAydjcuNTFoLTAuMDFWMTQuMjR6IE01Mi40MSwxNC42N2MtMS4wMywwLTIuMDItMC40My0yLjczLTEuMTh2My45NyAgICBjMCwwLjEzLTAuMSwwLjIzLTAuMjMsMC4yM2gtMS40Yy0wLjEzLDAtMC4yMy0wLjEtMC4yMy0wLjIzVjYuNzVjMC0wLjEzLDAuMS0wLjIyLDAuMjMtMC4yMmgxLjRjMC4xMywwLDAuMjMsMC4xMSwwLjIzLDAuMjN2MC43MyAgICBjMC43MS0wLjc2LDEuNy0xLjE4LDIuNzMtMS4xOGMyLjE3LDAsMy45NCwxLjg2LDMuOTQsNC4xOFM1NC41OCwxNC42Nyw1Mi40MSwxNC42N3ogTTY2LjI0LDExLjM5Yy0wLjM5LDEuODctMS45NiwzLjI5LTMuODQsMy4yOSAgICBjLTEuMDMsMC0yLjAyLTAuNDMtMi43My0xLjE4djAuNzNjMCwwLjEzLTAuMSwwLjIzLTAuMjMsMC4yM2gtMS40Yy0wLjEzLDAtMC4yMy0wLjExLTAuMjMtMC4yM1YzLjUxYzAtMC4xMywwLjEtMC4yMywwLjIzLTAuMjMgICAgaDEuNGMwLjEzLDAsMC4yMywwLjExLDAuMjMsMC4yM3YzLjk3YzAuNzEtMC43NSwxLjctMS4xOCwyLjczLTEuMTdjMS44OCwwLDMuNDUsMS40LDMuODQsMy4yOEM2Ni4zNywxMC4xOSw2Ni4zNywxMC44LDY2LjI0LDExLjM5ICAgIEw2Ni4yNCwxMS4zOUw2Ni4yNCwxMS4zOXogTTcxLjY3LDE0LjY4Yy0yLDAuMDEtMy43My0xLjM1LTQuMTctMy4zYy0wLjEzLTAuNTktMC4xMy0xLjE5LDAtMS43N2MwLjQ0LTEuOTQsMi4xNy0zLjMxLDQuMTctMy4zICAgIGMyLjM2LDAsNC4yNiwxLjg3LDQuMjYsNC4xOVM3NC4wMywxNC42OCw3MS42NywxNC42OEw3MS42NywxNC42OHogTTgzLjA0LDE0LjQ3aC0xLjYxYy0wLjEzLDAtMC4yNC0wLjA2LTAuMy0wLjE3bC0xLjQ0LTIuMzkgICAgbC0xLjQ0LDIuMzljLTAuMDYsMC4xMS0wLjE4LDAuMTctMC4zLDAuMTdoLTEuNjFjLTAuMDQsMC0wLjA4LTAuMDEtMC4xMi0wLjAzYy0wLjA5LTAuMDYtMC4xMy0wLjE5LTAuMDYtMC4yOGwwLDBsMi40My0zLjY4ICAgIEw3Ni4yLDYuODRjLTAuMDItMC4wMy0wLjAzLTAuMDctMC4wMy0wLjEyYzAtMC4xMiwwLjA5LTAuMjEsMC4yMS0wLjIxaDEuNjFjMC4xMywwLDAuMjQsMC4wNiwwLjMsMC4xN2wxLjQxLDIuMzZsMS40MS0yLjM2ICAgIGMwLjA2LTAuMTEsMC4xOC0wLjE3LDAuMy0wLjE3aDEuNjFjMC4wNCwwLDAuMDgsMC4wMSwwLjEyLDAuMDNjMC4wOSwwLjA2LDAuMTMsMC4xOSwwLjA2LDAuMjhsMCwwbC0yLjM4LDMuNjRsMi40MywzLjY3ICAgIGMwLjAyLDAuMDMsMC4wMywwLjA3LDAuMDMsMC4xMkM4My4yNSwxNC4zOCw4My4xNiwxNC40Nyw4My4wNCwxNC40N0w4My4wNCwxNC40N0w4My4wNCwxNC40N3oiLz4gIDxwYXRoIGNsYXNzPSJzdDAiIHN0eWxlPSJvcGFjaXR5OjAuOTsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiIGQ9Ik0xMC41LDEuMjRjLTUuMTEsMC05LjI1LDQuMTUtOS4yNSw5LjI1czQuMTUsOS4yNSw5LjI1LDkuMjVzOS4yNS00LjE1LDkuMjUtOS4yNSAgICBDMTkuNzUsNS4zOCwxNS42MSwxLjI0LDEwLjUsMS4yNHogTTE0Ljg5LDEyLjc3Yy0xLjkzLDEuOTMtNC43OCwyLjMxLTYuNywyLjMxYy0wLjcsMC0xLjQxLTAuMDUtMi4xLTAuMTZjMCwwLTEuMDItNS42NCwyLjE0LTguODEgICAgYzAuODMtMC44MywxLjk1LTEuMjgsMy4xMy0xLjI4YzEuMjcsMCwyLjQ5LDAuNTEsMy4zOSwxLjQyQzE2LjU5LDguMDksMTYuNjQsMTEsMTQuODksMTIuNzd6Ii8+ICA8cGF0aCBjbGFzcz0ic3QxIiBzdHlsZT0ib3BhY2l0eTowLjM1OyBlbmFibGUtYmFja2dyb3VuZDpuZXc7IiBkPSJNMTAuNS0wLjAxQzQuNy0wLjAxLDAsNC43LDAsMTAuNDlzNC43LDEwLjUsMTAuNSwxMC41UzIxLDE2LjI5LDIxLDEwLjQ5QzIwLjk5LDQuNywxNi4zLTAuMDEsMTAuNS0wLjAxeiAgICAgTTEwLjUsMTkuNzRjLTUuMTEsMC05LjI1LTQuMTUtOS4yNS05LjI1czQuMTQtOS4yNiw5LjI1LTkuMjZzOS4yNSw0LjE1LDkuMjUsOS4yNUMxOS43NSwxNS42MSwxNS42MSwxOS43NCwxMC41LDE5Ljc0eiIvPiAgPHBhdGggY2xhc3M9InN0MSIgc3R5bGU9Im9wYWNpdHk6MC4zNTsgZW5hYmxlLWJhY2tncm91bmQ6bmV3OyIgZD0iTTE0Ljc0LDYuMjVDMTIuOSw0LjQxLDkuOTgsNC4zNSw4LjIzLDYuMWMtMy4xNiwzLjE3LTIuMTQsOC44MS0yLjE0LDguODFzNS42NCwxLjAyLDguODEtMi4xNCAgICBDMTYuNjQsMTEsMTYuNTksOC4wOSwxNC43NCw2LjI1eiBNMTIuNDcsMTAuMzRsLTAuOTEsMS44N2wtMC45LTEuODdMOC44LDkuNDNsMS44Ni0wLjlsMC45LTEuODdsMC45MSwxLjg3bDEuODYsMC45TDEyLjQ3LDEwLjM0eiIgICAgLz4gIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHN0eWxlPSJvcGFjaXR5OjAuOTsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiIHBvaW50cz0iMTQuMzMsOS40MyAxMi40NywxMC4zNCAxMS41NiwxMi4yMSAxMC42NiwxMC4zNCA4LjgsOS40MyAxMC42Niw4LjUzIDExLjU2LDYuNjYgMTIuNDcsOC41MyAgICIvPjwvZz48L3N2Zz4=);\n}\n\n.mapboxgl-ctrl.mapboxgl-ctrl-attrib {\n    padding: 0 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    margin: 0;\n}\n\n.mapboxgl-ctrl-attrib.mapboxgl-compact {\n    padding-top: 2px;\n    padding-bottom: 2px;\n    margin: 0 10px 10px;\n    position: relative;\n    padding-right: 24px;\n    background-color: #fff;\n    border-radius: 3px 12px 12px 3px;\n    visibility: hidden;\n}\n\n.mapboxgl-ctrl-attrib.mapboxgl-compact:hover {\n    visibility: visible;\n}\n\n.mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n    content: '';\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%09%3Cpath%20fill%3D%27%23333333%27%20fill-rule%3D%27evenodd%27%20d%3D%27M4%2C10a6%2C6%200%201%2C0%2012%2C0a6%2C6%200%201%2C0%20-12%2C0%20M9%2C7a1%2C1%200%201%2C0%202%2C0a1%2C1%200%201%2C0%20-2%2C0%20M9%2C10a1%2C1%200%201%2C1%202%2C0l0%2C3a1%2C1%200%201%2C1%20-2%2C0%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n    background-color: rgba(255, 255, 255, 0.5);\n    width: 24px;\n    height: 24px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    visibility: visible;\n    border-radius: 12px;\n}\n\n.mapboxgl-ctrl-attrib a {\n    color: rgba(0, 0, 0, 0.75);\n    text-decoration: none;\n}\n\n.mapboxgl-ctrl-attrib a:hover {\n    color: inherit;\n    text-decoration: underline;\n}\n\n/* stylelint-disable-next-line selector-class-pattern */\n\n.mapboxgl-ctrl-attrib .mapbox-improve-map {\n    font-weight: bold;\n    margin-left: 2px;\n}\n\n.mapboxgl-attrib-empty {\n    display: none;\n}\n\n.mapboxgl-ctrl-scale {\n    background-color: rgba(255, 255, 255, 0.75);\n    font-size: 10px;\n    border-width: medium 2px 2px;\n    border-style: none solid solid;\n    border-color: #333;\n    padding: 0 5px;\n    color: #333;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.mapboxgl-popup {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    will-change: transform;\n    pointer-events: none;\n}\n\n.mapboxgl-popup-anchor-top,\n.mapboxgl-popup-anchor-top-left,\n.mapboxgl-popup-anchor-top-right {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.mapboxgl-popup-anchor-bottom,\n.mapboxgl-popup-anchor-bottom-left,\n.mapboxgl-popup-anchor-bottom-right {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n\n.mapboxgl-popup-anchor-left {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.mapboxgl-popup-anchor-right {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n\n.mapboxgl-popup-tip {\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    z-index: 1;\n}\n\n.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    border-top: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    border-top: none;\n    border-left: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    border-top: none;\n    border-right: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    border-bottom: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    border-bottom: none;\n    border-left: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    border-bottom: none;\n    border-right: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    border-left: none;\n    border-right-color: #fff;\n}\n\n.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    border-right: none;\n    border-left-color: #fff;\n}\n\n.mapboxgl-popup-close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border: 0;\n    border-radius: 0 3px 0 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n.mapboxgl-popup-close-button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-popup-content {\n    position: relative;\n    background: #fff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    padding: 10px 10px 15px;\n    pointer-events: auto;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {\n    border-top-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {\n    border-top-right-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {\n    border-bottom-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {\n    border-bottom-right-radius: 0;\n}\n\n.mapboxgl-marker {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n}\n\n.mapboxgl-user-location-dot {\n    background-color: #1da1f2;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);\n            box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);\n}\n\n.mapboxgl-user-location-dot::before {\n    background-color: #1da1f2;\n    content: '';\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: absolute;\n    -webkit-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    animation: mapboxgl-user-location-dot-pulse 2s infinite;\n}\n\n.mapboxgl-user-location-dot::after {\n    border-radius: 50%;\n    border: 2px solid #fff;\n    content: '';\n    height: 19px;\n    left: -2px;\n    position: absolute;\n    top: -2px;\n    width: 19px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@-webkit-keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -webkit-transform: scale(1); opacity: 1; }\n    70%  { -webkit-transform: scale(3); opacity: 0; }\n    100% { -webkit-transform: scale(1); opacity: 0; }\n}\n\n@keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }\n    70%  { -webkit-transform: scale(3); transform: scale(3); opacity: 0; }\n    100% { -webkit-transform: scale(1); transform: scale(1); opacity: 0; }\n}\n\n.mapboxgl-user-location-dot-stale {\n    background-color: #aaa;\n}\n\n.mapboxgl-user-location-dot-stale::after {\n    display: none;\n}\n\n.mapboxgl-crosshair,\n.mapboxgl-crosshair .mapboxgl-interactive,\n.mapboxgl-crosshair .mapboxgl-interactive:active {\n    cursor: crosshair;\n}\n\n.mapboxgl-boxzoom {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    background: #fff;\n    border: 2px dotted #202020;\n    opacity: 0.5;\n}\n\n@media print {\n    /* stylelint-disable-next-line selector-class-pattern */\n    .mapbox-improve-map {\n        display: none;\n    }\n}\n\n/* Basics */\n\n.mapboxgl-ctrl-geocoder,\n.mapboxgl-ctrl-geocoder *,\n.mapboxgl-ctrl-geocoder *:after,\n.mapboxgl-ctrl-geocoder *:before {\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  }\n\n.mapboxgl-ctrl-geocoder {\n  font:15px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  position:relative;\n  background-color:white;\n  width:33.3333%;\n  min-width:240px;\n  max-width:360px;\n  z-index:1;\n  border-radius:3px;\n  }\n\n.mapboxgl-ctrl-geocoder input[type='text'] {\n  font-size:12px;\n  width:100%;\n  border:0;\n  background-color:transparent;\n  height:40px;\n  margin:0;\n  color:rgba(0,0,0,.5);\n  padding:10px 10px 10px 40px;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  overflow:hidden;\n  }\n\n.mapboxgl-ctrl-geocoder input:focus {\n    color:rgba(0,0,0,.75);\n    outline:0;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    outline:thin dotted\\8;\n    }\n\n.mapboxgl-ctrl-geocoder .geocoder-icon-search {\n  position:absolute;\n  top:10px;\n  left:10px;\n  }\n\n.mapboxgl-ctrl-geocoder button {\n  padding:0;\n  margin:0;\n  background-color:#fff;\n  border:none;\n  cursor:pointer;\n  }\n\n.mapboxgl-ctrl-geocoder .geocoder-pin-right * {\n  background-color:#fff;\n  z-index:2;\n  position:absolute;\n  right:10px;\n  top:10px;\n  display:none;\n  }\n\n.mapboxgl-ctrl-geocoder,\n.mapboxgl-ctrl-geocoder ul {\n  -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.1);\n          box-shadow: 0 0 0 2px rgba(0,0,0,0.1);\n  }\n\n/* Suggestions */\n\n.mapboxgl-ctrl-geocoder ul {\n  background-color:#fff;\n  border-radius: 0 0 3px 3px;\n  left:0;\n  list-style:none;\n  margin:0;\n  padding:0;\n  position:absolute;\n  width:100%;\n  top:100%;\n  z-index:1000;\n  overflow:hidden;\n  font-size:12px;\n  }\n\n.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl-geocoder ul,\n  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl-geocoder ul {\n    top:auto;\n    bottom:100%;\n    }\n\n.mapboxgl-ctrl-geocoder ul > li > a {\n    clear:both;\n    cursor:default;\n    display:block;\n    padding:5px 10px;\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    border-bottom:1px solid rgba(0,0,0,0.1);\n    color:#404040;\n    }\n\n.mapboxgl-ctrl-geocoder ul > li:last-child > a { border-bottom:none; }\n\n.mapboxgl-ctrl-geocoder ul > li > a:hover {\n      color:#202020;\n      background-color:#f3f3f3;\n      text-decoration:none;\n      cursor:pointer;\n      }\n\n.mapboxgl-ctrl-geocoder ul > li.active > a {\n      color:#202020;\n      background-color:#e3e3e3;\n      text-decoration:none;\n      cursor:pointer;\n      }\n\n@-webkit-keyframes rotate { from { -webkit-transform: rotate(0deg); } to { -webkit-transform: rotate(360deg); } }\n\n@keyframes rotate { from { -webkit-transform: rotate(0deg); transform: rotate(0deg); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }\n\n/* icons */\n\n.geocoder-icon {\n  display:inline-block;\n  width:20px;\n  height:20px;\n  vertical-align:middle;\n  speak:none;\n  background-repeat:no-repeat;\n  }\n\n.geocoder-icon-search {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIj4NCiAgPHBhdGggZD0iTTguNSA0QzYgNCA0IDYgNCA4LjUgNCAxMSA2IDEzIDguNSAxMyA5LjQgMTMgMTAuMiAxMi44IDEwLjggMTIuM0wxMC45IDEyLjMgMTQuMyAxNS43QzE0LjUgMTUuOSAxNC43IDE2IDE1IDE2IDE1LjYgMTYgMTYgMTUuNiAxNiAxNSAxNiAxNC43IDE1LjkgMTQuNSAxNS43IDE0LjNMMTIuMyAxMC45IDEyLjMgMTAuOEMxMi44IDEwLjIgMTMgOS40IDEzIDguNSAxMyA2IDExIDQgOC41IDR6TTguNSA1LjVDMTAuMiA1LjUgMTEuNSA2LjggMTEuNSA4LjUgMTEuNSAxMC4yIDEwLjIgMTEuNSA4LjUgMTEuNSA2LjggMTEuNSA1LjUgMTAuMiA1LjUgOC41IDUuNSA2LjggNi44IDUuNSA4LjUgNS41eiIgZmlsbD0iIzAwMCIvPg0KPC9zdmc+);\n    }\n\n.geocoder-icon-close {\n    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiPg0KICA8cGF0aCBkPSJtNSA1IDAgMS41IDMuNSAzLjUtMy41IDMuNSAwIDEuNSAxLjUgMCAzLjUtMy41IDMuNSAzLjUgMS41IDAgMC0xLjUtMy41LTMuNSAzLjUtMy41IDAtMS41LTEuNSAwLTMuNSAzLjUtMy41LTMuNS0xLjUgMHoiIGZpbGw9IiMwMDAiLz4NCjwvc3ZnPg==);\n    }\n\n.geocoder-icon-loading {\n    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwYXRoIGQ9Im0xMCAyIDAgMy4zYzIuNiAwIDQuNyAyLjEgNC43IDQuN2wzLjMgMGMwLTQuNC0zLjYtOC04LTh6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTEwIDJDNi44IDIgMy43IDQuMSAyLjYgNy4xIDEuNCAxMCAyLjEgMTMuNiA0LjUgMTUuOGMyLjQgMi40IDYuNCAyLjkgOS40IDEuMiAyLjUtMS40IDQuMi00LjIgNC4yLTctMS4xIDAtMi4yIDAtMy4zIDAgMC4xIDIuMi0xLjcgNC4zLTMuOCA0LjZDOC43IDE1IDYuNCAxMy44IDUuNyAxMS43IDQuOCA5LjcgNS42IDcuMSA3LjYgNiA4LjMgNS42IDkuMSA1LjMgMTAgNS4zYzAtMS4xIDAtMi4yIDAtMy4zeiIgc3R5bGU9ImZpbGw6IzAwMDtvcGFjaXR5OjAuMiIvPjwvc3ZnPg==);\n    -webkit-animation: rotate 400ms linear infinite;\n            animation: rotate 400ms linear infinite;\n    }\n\nbody {\n    margin:0;\n    padding:0;\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\n\n.wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    height: 100vh !important;    \n}\n\n#menu {\n    margin-top: 18px !important;\n}\n\n#menu > .list-group-item {\n    color: black !important;\n    border: none !important;\n    margin-bottom: none !important;\n}\n\n#menu > .list-group-item:first-child {\n    border-top-left-radius: 0px !important;\n    border-top-right-radius: 0px !important;\n}\n\n#content {\n    padding: 0px;\n}\n\n#sidebar {\n    position: absolute;\n    z-index: 1000;\n    text-align: center !important;\n    width: 100%;\n}\n\n#menu .pp-tab {\n    background-color: white !important;\n    padding: 10px !important;\n}\n\n#sidebar ul li a {\n    font-family: 'Questrial', sans-serif !important;\n}\n\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    background: #fafafa;\n}\n\np {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\n.mapboxgl-popup {\n    max-width: 400px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n#sidebar .active {\n    background-color: #30AABB !important;\n    border-color: #30AABB !important;\n}\n\n#map .mapboxgl-ctrl-bottom-right {\n    display: none !important;\n}\n\n#menu > .mapboxgl-control-container > .mapboxgl-ctrl-top-right {\n    bottom: 20px;\n}\n\n.mapboxgl-ctrl-attrib {\n    display: none !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n        \n            <!-- Sidebar -->\n            <nav id=\"sidebar\">\n                <app-list></app-list>\n            </nav>\n        \n            <!-- Page Content -->\n            <div id=\"content\" class=\"col-sm-12\">\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"navbar-btn\">\n                            <span></span>\n                            <span></span>\n                            <span></span>\n                    </button>\n                <app-map></app-map>\n            </div>\n        \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_food_service__ = __webpack_require__("./src/app/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_mapbox_gl__ = __webpack_require__("./node_modules/ngx-mapbox-gl/esm5/ngx-mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_mapbox_gl__["a" /* NgxMapboxGLModule */].forRoot({
                    accessToken: 'pk.eyJ1IjoiZGFnc3NvbiIsImEiOiJjajk0MTRqdWIzZGxwMzNycGtreDhxMmRxIn0.0zk_7FSvF_LlQ0AD2cChWQ',
                    geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_8__services_map_service__["a" /* MapService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar-header {\n    padding: 5%;\n    text-align: center;\n}\n\n.sidebar-header h3 {\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n}\n\n.pp-leit {\n    color: rgb(1, 102, 94);\n    border-color: rgb(1, 102, 94)\n}\n\nnav {\n    font-family: 'Source Sans Pro', sans-serif;\n    padding: 10px 50px;\n    display: inline-block;\n    width: 100%;\n    padding: 0px;\n    border-bottom: 5px solid #d8d7d7;\n  }\n\n#navbarSupportedContent ul {\n    margin: 0 auto;\n}\n\n.list-dropdown {\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  background: white;\n  color: black;\n  text-align: left;\n  overflow-y: auto;\n  max-height: 400px;\n}\n\n.producers {\n  padding: 10px;\n}\n\n.producers:hover {\n  background:#c2c2c2\n}\n\n.autocomplete {\n  /*the container must be positioned relative:*/\n  position: relative;\n  display: inline-block;\n}\n\ninput {\n  border: 1px solid transparent;\n  background-color: #f1f1f1;\n  padding: 10px;\n  font-size: 16px;\n}\n\ninput[type=text] {\n  background-color: #f1f1f1;\n  width: 100%;\n  margin-top: 25px;\n}\n\ninput[type=button] {\n  background-color: DodgerBlue;\n  color: #fff;\n  cursor: pointer;\n}\n\ninput[type=text]:focus, input[type=button]:focus {\n  outline:0 !important;\n}\n\n.autocomplete-items {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 99;\n  /*position the autocomplete items to be the same width as the container:*/\n  top: 100%;\n  left: 0;\n  right: 0;\n}\n\n.autocomplete-items div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff; \n  border-bottom: 1px solid #d4d4d4; \n}\n\n.autocomplete-items div:hover {\n  /*when hovering an item:*/\n  background-color: #e9e9e9; \n}\n\n.autocomplete-active {\n  /*when navigating through the items using the arrow keys:*/\n  background-color: DodgerBlue !important; \n  color: #ffffff; \n}\n\n#menu {\n  display: -webkit-inline-box;\n  margin-top: 50px;\n}\n\n.navbar-brand {\n  margin-top: 30px;\n}\n\n.d-inline-block {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n\n.navbar h2 {\n  margin-top: 50px;\n  font-size: 2.5 rem;\n  letter-spacing: 12px;\n}\n  "

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <!-- Sidebar Links -->\n          <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n                \n                        \n                    <img src=\"../assets/img/Matis_logo_blatt-01.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\n                        <h2>MATARLANDSLAGIÐ</h2>\n                \n\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n              \n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                  <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                            \n                    </li>\n            \n                    <!--<li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                              Markaðir\n                            </a>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                              <a class=\"dropdown-item\" href=\"#\">Bændamarkaður Hofósi</a>\n                              <a class=\"dropdown-item\" href=\"#\">Bændamarkaður Hvolsvelli</a>\n                            </div>\n                          </li>-->\n\n                          <form autocomplete=\"off\">\n                            <div class=\"autocomplete\" style=\"width:300px;\">\n                              <input id=\"theinput\" type=\"text\" (keyup)=\"onKey($event)\" placeholder=\"Frumframleiðandi\">\n                              <div *ngIf=\"showDropDown\" class=\"list-dropdown\">\n                                  <div>\n                                    <div (click)=\"selectValue(filter)\" class=\"producers\" *ngFor=\"let filter of filtered\">\n                                        {{filter}} \n                                    </div>    \n                                  </div> \n                                </div>\n                            </div>\n                            <input type=\"button\" value=\"Finna stað\" id=\"leit-btn\">\n                          </form>\n                                                     \n                  </ul>\n\n                  \n                </div>\n                <div id=\"tabs\" class=\"col-sm-12\">\n                  <div role=\"tablist\" id=\"menu\"></div>\n          </div>\n              </nav>\n\n              \n  \n              \n              \n  \n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__ = __webpack_require__("./src/app/shared/mock-food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(http, _mapService) {
        this.http = http;
        this._mapService = _mapService;
        this.token = 'pk.eyJ1IjoiZGFnc3NvbiIsImEiOiJjajk0MTRqdWIzZGxwMzNycGtreDhxMmRxIn0.0zk_7FSvF_LlQ0AD2cChWQ';
        this.urls = ['https://api.mapbox.com/datasets/v1/dagsson/cjgxrynuy1nhn2wmoqz4sn8fu/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjgxsaekx0cdv33o8zncly704/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl8568s70jg12vlgnxyw0p9g/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjgxs7hoc07ly2wmx7wc7qjz9/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl84jijf0inv2uruidekzdw1/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl84fisc05zf2qnz5x84dgjx/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl848pqj0j0s2ql3t6s5ukg4/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83jmld0j6m2vqkzr56ngw5/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83gvwh0iwe2vrui3axviv4/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83eiez0ivr2vrusczd8v9r/features'];
        this.filtered = [];
        this.allresults = [];
        this.showDropDown = false;
        this.food = __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.selectValue = function (p) {
        var inputElement = document.getElementById('theinput');
        inputElement.value = p;
        this.showDropDown = false;
    };
    ListComponent.prototype.onKey = function (e) {
        var _this = this;
        this.showDropDown = true;
        var value = e.target.value.trim().toLowerCase();
        for (var i in this.urls) {
            this.http.get(this.urls[i] + '?access_token=' + this.token).subscribe(function (val) {
                _this.response = val['features'];
                _this.posts = _this.response.map(function (response) { return response.properties.Name.trim().toLowerCase(); });
                Array.prototype.push.apply(_this.allresults, _this.posts);
            });
        }
        ;
        console.log(this.allresults);
        this.filtered = this.allresults.filter(function (post) { return post.indexOf(value) > -1 && value.length > 2; });
        this.allresults = [];
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "\n#map { position: absolute; top:0; bottom:0; width:100%;}\n\n#dashboard {\n    position: absolute;\n    bottom: -550px;\n    -webkit-transition: .3s;\n    transition: .3s;\n}\n\nh5, h6 {\n    font-family: \"source sans pro\";\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n#station_card {\n    z-index: 100;\n    background-color: white;\n    opacity: 0.9;\n    bottom: 0px;\n    color: #818182;\n    -webkit-transition: .2;\n    transition: .2;\n    width: 100%;\n    text-align: center;\n    border: 1px solid #d6d6d6;\n    padding: 0px;\n}\n\n#station_card div {\n    padding: 3% 7%;\n}\n\n#station_card h2 {\nfont-size: 2rem;\ncolor: #17a2b8;\ntext-transform: uppercase;\nletter-spacing: 3px;\nfont-family: montserrat;\npadding-bottom: 5px;\n}\n\n#info {\n    color: white;\n    padding: 12px;\n    padding-left: 12px;\n    font-family: montserrat;\n    font-size: 14px;\n}\n\n#tagline {\n    text-align: center;\n    font-family: sans-serif;\n    color: rgb(180, 180, 180);\n    font-weight: 100;\n    letter-spacing: .6px;\n    padding: 5px;\n}\n\n.iconwrap {\n    text-align: center;\n}\n\n.iconwrap img {\n    height: 70px;\n}\n\n#foodinc {\n    height: 35px;\n}\n\n#foodtype, #foodtypeII, #location {\n    font-size: 1rem;\n    color: black;\n}\n\n#primary-producer {\n    display: -webkit-inline-box;\n    list-style: none;\n    padding-left: 0px;\n}\n\n#primary-producer li {\n    margin-right: 15px;\n}\n\n#matis_logo {\n    height: 100px;\n    padding: 2%;\n}\n\n#menu {\n    text-align: center;\n    display: -webkit-inline-box;\n    cursor: pointer;\n    margin-top: 18px !important;\n    z-index: 100;\n}\n\n#menu[_ngcontent-c1] > li {\n    cursor: pointer !important;\n}\n\n#menu > .list-group-item {\n    color: black !important;\n    border: none !important;\n    margin-bottom: none !important;\n}\n\n#menu[_ngcontent-c1] .list-group-item:first-child {\n    border-top-left-radius: 0px !important;\n    border-top-right-radius: 0px !important;\n}\n\n#tabs {\n    position: absolute;\n    bottom: 0px !important;\n    z-index: 2;\n    text-align: center;\n    font-size: 14px;\n}\n\n.details {\n    text-align: left;\n}\n\n#close_button {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    height: 15px;\n}\n\n.map-overlay .listing {\n    overflow: auto;\n    max-height: 100%;\n    position: absolute;\n    list-style: none;\n    max-width: 200px;\n    background-color: #ffffff70;\n    margin-top: 35px;\n}\n\n#feature-listing li {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n\n.map-overlay .listing a:last-child {\n    border: none;\n}\n\n.map-overlay .listing a:hover {\n    background: #f0f0f0;\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\n\n    <div id=\"dashboard\" class=\"col-sm-12\">\n            \n        <div id=\"station_info\" class=\"row\">\n                \n                <div class=\"col-sm-4\"></div>\n                <div id=\"station_card\" class=\"col-sm-4\">\n                    <div id=\"card-heading\"><img id=\"foodinc\" src=''/><span id=\"info\"></span></div>\n                    <img src=\"../assets/img/close.png\" (click)=\"close($event)\" id=\"close_button\"/>\n                    <div class=\"row\">\n                    <div class=\"col-sm-6 details\">\n                        <h6>Staðsetning:</h6>\n                        <h5 id=\"location\"></h5>\n                    </div>\n                    <div class=\"col-sm-6 details\">\n                        <h6>Starfsemi:</h6>\n                        <h5 id=\"foodtype\"></h5>\n                        <h5 id=\"foodtypeII\"></h5>\n                    </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\"></div>\n            \n        </div>\n        \n    </div>\n \n</div>\n\n<div class='map-overlay'>\n        <ul id='feature-listing' class='listing'>\n        </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(_mapService) {
        this._mapService = _mapService;
    }
    MapComponent.prototype.close = function (event) {
        document.getElementById("dashboard").style.bottom = '-550px';
    };
    MapComponent.prototype.ngOnInit = function () {
        this._mapService.getMap();
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/food.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__ = __webpack_require__("./src/app/shared/mock-food.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodService = /** @class */ (function () {
    function FoodService() {
    }
    FoodService.prototype.getFood = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */]);
        return __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */];
    };
    FoodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var listinn = [];
var apiToken = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].MAPBOX_API_KEY;
var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
    }
    MapService.prototype.getMap = function () {
        var http = this.http;
        var mapboxgl = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
        mapboxgl.accessToken = apiToken;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/dagsson/cj99p8osy3in82smvtx2ie7x8',
            zoom: 5.55,
            minZoom: 5.6,
            center: [-19.058391, 64.970529]
        });
        map.addControl(new mapboxgl.AttributionControl(), 'top-left');
        var inputElement = document.getElementById('theinput');
        var listingEl = document.getElementById('feature-listing');
        var searchBtn = document.getElementById('leit-btn');
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });
        function flyToStore(currentFeature) {
            map.flyTo({
                center: currentFeature.geometry.coordinates,
                zoom: 12
            });
        }
        searchBtn.addEventListener('click', function (r) {
            var token = 'pk.eyJ1IjoiZGFnc3NvbiIsImEiOiJjajk0MTRqdWIzZGxwMzNycGtreDhxMmRxIn0.0zk_7FSvF_LlQ0AD2cChWQ';
            var urls = ['https://api.mapbox.com/datasets/v1/dagsson/cjgxrynuy1nhn2wmoqz4sn8fu/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjgxsaekx0cdv33o8zncly704/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl8568s70jg12vlgnxyw0p9g/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjgxs7hoc07ly2wmx7wc7qjz9/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl84jijf0inv2uruidekzdw1/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl84fisc05zf2qnz5x84dgjx/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl848pqj0j0s2ql3t6s5ukg4/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83jmld0j6m2vqkzr56ngw5/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83gvwh0iwe2vrui3axviv4/features', 'https://api.mapbox.com/datasets/v1/dagsson/cjl83eiez0ivr2vrusczd8v9r/features'];
            var goTo = inputElement.value;
            var response;
            for (var i in urls) {
                http.get(urls[i] + '?access_token=' + token).subscribe(function (val) {
                    response = val['features'];
                    goToPoint(response, goTo);
                });
            }
            ;
        });
        function goToPoint(obj, name) {
            for (var i = 0; i < obj.length; i++)
                if (obj[i].properties.Name.toLowerCase() === name) {
                    flyToStore(obj[i]);
                }
            return null;
        }
        map.on('load', function () {
            map.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            }), 'bottom-right');
            var nav = new mapboxgl.NavigationControl();
            map.addControl(nav, 'bottom-right');
            map.addSource('naut', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl84fisc05zf2qnz5x84dgjx-53nf3'
            });
            map.addLayer({
                'id': 'Nautgripir',
                'type': 'circle',
                'source': 'naut',
                'imgsource': '../assets/img/cow.png',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': 'rgb(84,48,5)'
                },
                'source-layer': 'nautgripir_ag2018'
            });
            map.on('click', 'Nautgripir', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.ProductII;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/011-animals-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: rgb(84,48,5)');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Nautgripir', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Nautgripir', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            map.addSource('kind', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl84jijf0inv2uruidekzdw1-60rdm'
            });
            map.addLayer({
                'id': 'Sauðfé',
                'icon': '',
                'type': 'circle',
                'source': 'kind',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#8c510a'
                },
                'source-layer': 'saudfe_ag2018'
            });
            map.on('click', 'Sauðfé', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.ProductII;
                document.getElementById('location').innerHTML = e.features[0].properties.Place;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/007-animals-5-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #8c510a');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Sauðfé', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Sauðfé', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Thorungar
            map.addSource('thorungar', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxsaywq0bdn32mswtdla8f4-8ocuk'
            });
            map.addLayer({
                'id': 'Þörungar',
                'icon': '',
                'type': 'circle',
                'source': 'thorungar',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#bf812d'
                },
                'source-layer': 'Thorungar_merged'
            });
            map.on('click', 'Þörungar', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/003-sea-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #bf812d');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Þörungar', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Þörungar', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Hross
            map.addSource('hross', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl83lx2w02oo31pbmccnrd9g-1ddsc'
            });
            map.addLayer({
                'id': 'Hestar',
                'icon': '',
                'type': 'circle',
                'source': 'hross',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#A57D28'
                },
                'source-layer': 'hross_ag2018'
            });
            map.on('click', 'Hestar', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/009-animals-3-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #A57D28');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Hestar', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Hestar', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Fiskeldi
            map.addSource('fiskeldi', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl83gvwh0iwe2vrui3axviv4-9jo3e'
            });
            map.addLayer({
                'id': 'Fiskeldi',
                'icon': '',
                'type': 'circle',
                'source': 'fiskeldi',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#dea613'
                },
                'source-layer': 'fiskeldi_ag2018'
            });
            map.on('click', 'Fiskeldi', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/006-food-1-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #dea613');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Fiskeldi', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Fiskeldi', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Alifuglar
            map.addSource('alifuglar', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl83eiez0ivr2vrusczd8v9r-890x1'
            });
            map.addLayer({
                'id': 'Alifuglar',
                'icon': '',
                'type': 'circle',
                'source': 'alifuglar',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#b1200f'
                },
                'source-layer': 'alifuglar_ag2018'
            });
            map.on('click', 'Alifuglar', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/008-animals-4-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #b1200f');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Alifuglar', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Alifuglar', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Skip
            map.addSource('skip', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl8568s70jg12vlgnxyw0p9g-27p4q'
            });
            map.addLayer({
                'id': 'Afli',
                'icon': '',
                'type': 'circle',
                'source': 'skip',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#fa482e'
                },
                'source-layer': 'skip_ag2018'
            });
            map.on('click', 'Afli', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Type;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Size;
                document.getElementById('location').innerHTML = e.features[0].properties.heimahofn;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/001-transport-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #fa482e');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Afli', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Afli', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Geitur
            map.addSource('geitur', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl83jmld0j6m2vqkzr56ngw5-8w1w7'
            });
            map.addLayer({
                'id': 'Geitur',
                'icon': '',
                'type': 'circle',
                'source': 'geitur',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#f4a32e'
                },
                'source-layer': 'geitur_ag2018'
            });
            map.on('click', 'Geitur', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/002-animals-1-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #f4a32e');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Geitur', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Geitur', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Matjurtir
            map.addSource('matjurtir', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl848pqj0j0s2ql3t6s5ukg4-9ct42'
            });
            map.addLayer({
                'id': 'Matjurtir',
                'icon': '',
                'type': 'circle',
                'source': 'matjurtir',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#80cdc1'
                },
                'source-layer': 'matjurtir_ag2018'
            });
            map.on('click', 'Matjurtir', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/004-nature-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #80cdc1');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Matjurtir', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Matjurtir', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Svin
            map.addSource('svin', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl865kyd0jc72qqknchl205x-6brmo'
            });
            var svin = map.addLayer({
                'id': 'Svín',
                'icon': '../assets/img/010-animals-2.png',
                'type': 'circle',
                'source': 'svin',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#35978f'
                },
                'source-layer': 'svin_ag2018'
            });
            map.on('click', 'Svín', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom:115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/010-animals-2-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #35978f');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
                console.log(svin);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Svín', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Svín', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Skelfiskur
            map.addSource('skelfiskur', {
                type: 'vector',
                url: 'mapbox://dagsson.cjl84n8gn0iwv32piimp4c3y8-5j5mq'
            });
            map.addLayer({
                'id': 'Skelfiskur',
                'icon': '',
                'type': 'circle',
                'source': 'skelfiskur',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[3, 3], [16, 32]]
                    },
                    'circle-color': '#01665e'
                },
                'source-layer': 'skelfiskur_ag2018'
            });
            map.on('click', 'Skelfiskur', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('dashboard').setAttribute('style', 'bottom: 115px');
                document.getElementById('foodinc').setAttribute('src', '../assets/img/005-food-w.png');
                document.getElementById('card-heading').setAttribute('style', 'background-color: #01665e');
                var clickedPoint = e.features[0];
                flyToStore(clickedPoint);
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Skelfiskur', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Skelfiskur', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            var tabImg = ['../assets/img/011-animals.png', '../assets/img/007-animals-5.png', '../assets/img/003-sea.png', '../assets/img/009-animals-3.png', '../assets/img/006-food-1.png', '../assets/img/008-animals-4.png', '../assets/img/001-transport.png', '../assets/img/002-animals-1.png', '../assets/img/004-nature.png', '../assets/img/010-animals-2.png', '../assets/img/005-food.png'];
            var toggleableLayerIds = ['Nautgripir', 'Sauðfé', 'Þörungar', 'Hestar', 'Fiskeldi', 'Alifuglar', 'Afli', 'Geitur', 'Matjurtir', 'Svín', 'Skelfiskur'];
            for (var i = 0; i < toggleableLayerIds.length; i++) {
                var id = toggleableLayerIds[i];
                var foodicon = document.createElement('img');
                var link = document.createElement('a');
                link.textContent = id;
                link.appendChild(foodicon);
                link.style.display = "grid";
                link.style.color = "black";
                link.style.backgroundColor = "white";
                link.style.padding = "15px";
                link.style.fontFamily = "Source Sans Pro";
                link.style.width = '90px';
                foodicon.setAttribute('src', tabImg[i]);
                foodicon.style.height = "25px";
                foodicon.style.margin = "10px auto 0px";
                foodicon.style.opacity = "0.3";
                var features = map.getSource('skelfiskur');
                link.onclick = function (e) {
                    console.log(map.getSource('hross'));
                    var clickedLayer = this.textContent;
                    e.preventDefault();
                    e.stopPropagation();
                    var bgColor = map.getPaintProperty(clickedLayer, 'circle-color');
                    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                    if (visibility === 'none') {
                        this.className = 'pp-tab';
                        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                        this.style.color = "white";
                        this.style.backgroundColor = bgColor;
                    }
                    else {
                        this.className = 'pp-tab active';
                        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                        this.style.color = "black";
                        this.style.borderColor = "lightgray";
                        this.style.backgroundColor = "white";
                    }
                };
                var layers = document.getElementById('menu');
                layers.appendChild(link);
            }
        });
    };
    ;
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MapService);
    return MapService;
}());

;


/***/ }),

/***/ "./src/app/shared/mock-food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOOD_LIST; });
var FOOD_LIST = [
    {
        "id": 1,
        "name": "Cattle",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    },
    {
        "id": 2,
        "name": "Sheep",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    },
    {
        "id": 3,
        "name": "Fish",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    MAPBOX_API_KEY: 'pk.eyJ1IjoiZGFnc3NvbiIsImEiOiJjajk0MTRqdWIzZGxwMzNycGtreDhxMmRxIn0.0zk_7FSvF_LlQ0AD2cChWQ',
    firebase: {
        apiKey: "AIzaSyADcYBoe212jY2BBAukN7fRqAL1zpHw3aA",
        authDomain: "eaticeland.firebaseapp.com",
        databaseURL: "https://eaticeland.firebaseio.com",
        projectId: "eaticeland",
        storageBucket: "eaticeland.appspot.com",
        messagingSenderId: "304716417170"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map