                <script type="dojo/on" data-dojo-event="click" data-dojo-args="evt">
                    require([
                    "esri/map",
                    "esri/graphic", 
                    "esri/toolbars/draw",
                    "esri/geometry/Point",
                    "esri/Color",
                    "esri/geometry/webMercatorUtils",
                    "esri/symbols/SimpleMarkerSymbol",
                    "dojo/on",
                    "dojo/dom",
                    "dojo/domReady!"
                    ], function(Map,Graphic,Draw,Point,Color,webMercatorUtils,SimpleMarkerSymbol,on,dom) {
                        var ms = new SimpleMarkerSymbol();
                        ms.setColor(new Color("#F95454"));
                        var lat = dom.byId("lat").value;
                        var long = dom.byId("long").value;
                        var mp = webMercatorUtils.lngLatToXY(long, lat);
                        var point = new Point(mp,sref);
                        var gp = new Graphic(point, ms);
                        map.graphics.add(gp);
                    });
                </script>

                <script type="dojo/on" data-dojo-event="click" data-dojo-args="evt">
                require([
                "esri/map",
                "esri/geometry/Point",
                "esri/geometry/webMercatorUtils",
                "dojo/dom"
                ], function(Map,Point,webMercatorUtils,dom){
                    var lat = dom.byId("lat").value;
                    var long = dom.byId("long").value;         
                    var mp = webMercatorUtils.lngLatToXY(long, lat);
                    var point = new Point(mp,sref);
                    map.centerAndZoom(point, levelOrFactor)
                    levelOrFactor = levelOrFactor+2;
                });
                </script>