import L from "leaflet";
import '~/lib/leaflet.layer.yandex';
import '~/lib/leaflet.layer.google';
import {BingLayer} from '~/lib/leaflet.layer.bing';
import config from './config';
import '~/lib/leaflet.layer.soviet-topomaps-grid';
import '~/lib/leaflet.layer.westraPasses';
import '~/lib/leaflet.layer.wikimapia';
import {GeocachingSu} from '~/lib/leaflet.layer.geocaching-su';
import {RetinaTileLayer} from '~/lib/leaflet.layer.RetinaTileLayer';
import urlViaCorsProxy from '~/lib/CORSProxy';
import '~/lib/leaflet.layer.TileLayer.cutline';
import {getCutline} from '~/lib/layers-cutlines';
import {LayerCutlineOverview} from '~/lib/leaflet.layer.LayerCutlineOverview';

class LayerGroupWithOptions extends L.LayerGroup {
    constructor(layers, options) {
        super(layers);
        L.setOptions(this, options);
    }
}

    const layersDefs = [
                {
                    title: 'OpenStreetMap',
                    description: 'OSM default style',
                    isDefault: true,
                    layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                        {
                            code: 'O',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'osm',
                            attribution: '<a href="https://www.openstreetmap.org/copyright">' +
                                '&copy; OpenStreetMap contributors</a>',
                        }
                    )
                },
                {
                    title: 'ESRI Satellite',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'E',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'esri',
                            attribution:
                                '<a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">' +
                                'ESRI World Imagery for ArcGIS</a>',
                        }
                    )
                },
                {
                    title: 'Yandex map',
                    isDefault: true,
                    layer: new L.Layer.Yandex.Map(
                        {
                            scaleDependent: true,
                            code: 'Y',
                            isOverlay: false,
                            print: true,
                            jnx: true,
                            shortName: 'yandex',
                            attribution: '<a href="https://yandex.ru/maps/">Yandex</a>',
                        }
                    )
                },
                {
                    title: 'Yandex Satellite',
                    isDefault: true,
                    layer: new L.Layer.Yandex.Sat(
                        {
                            scaleDependent: false,
                            code: 'S',
                            isOverlay: false,
                            print: true,
                            jnx: true,
                            shortName: 'yandex_sat',
                            attribution: '<a href="https://yandex.ru/maps/?l=sat">Yandex</a>',
                        }
                    )
                },
                {
                    title: 'Google Map',
                    isDefault: true,
                    layer: new L.Layer.GoogleMap(
                        {
                            code: 'G',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'google',
                            attribution: '<a href="https://www.google.com/maps">Google</a>',
                        }
                    )
                },
                {
                    title: 'Google Satellite',
                    isDefault: true,
                    layer: new L.Layer.GoogleSat(
                        {
                            code: 'L',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'google_sat',
                            attribution: '<a href="https://www.google.com/maps/@43.0668619,60.5738071,13622628m' +
                                '/data=!3m1!1e3">Google</a>',
                        }
                    )
                },
                {
                    title: 'Bing Satellite',
                    isDefault: true,
                    layer: new BingLayer(config.bingKey,
                        {
                            code: 'I',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'bing_sat'
                        }
                    )
                },
                {
                    title: 'Topomapper 1km',
                    isDefault: true,
                    layer: L.tileLayer(
                        urlViaCorsProxy(
                            'http://88.99.52.155/cgi-bin/tapp/tilecache.py/1.0.0/topomapper_v2/{z}/{x}/{y}.jpg'
                        ),
                        {
                            code: 'T',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 13,
                            noCors: false,
                            print: true,
                            jnx: true,
                            shortName: 'topomapper_1k',
                            attribution: '<a href="https://play.google.com/store/apps/' +
                                'details?id=com.atlogis.sovietmaps.free&hl=en&gl=US">Russian Topo Maps</a>',
                        }
                    )
                },
                {
                    title: 'Wikimapia',
                    isDefault: true,
                    layer: new L.Wikimapia({
                        code: 'W',
                        isOverlay: true,
                        print: false,
                        jnx: false,
                        attribution: '<a href="https://wikimapia.org/">Wikimapia</a>',
                        tilesBaseUrl: config.wikimapiaTilesBaseUrl,
                    })
                },
                {
                    title: 'OpenRailwayMap',
                    isDefault: true,
                    layer: new L.tileLayer("http://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png", {
                        isOverlay: true,
                        isOverlayTransparent: false,
                        print: false,
                        jnx: false,
                    })
                },
                {
                    title: 'OpenTopoMap',
                    isDefault: true,
                    layer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                        {
                            code: 'Otm',
                            isOverlay: false,
                            maxNativeZoom: 16,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            noCors: false,
                            shortName: 'opentopo',
                            attribution: '<a href="https://opentopomap.org/">OpenTopoMap</a>',
                            hotkey: 'V',
                        }
                    )
                },
    ];

    const groupsDefs = [
        {
            title: 'Default layers',
            layers: [
                'OpenStreetMap',
                'OpenTopoMap',
                'ESRI Satellite',
                'Yandex map',
                'Yandex Satellite',
                'Google Map',
                'Google Satellite',
                'Bing Satellite',
                'Topomapper 1km',
                'OpenRailwayMap',
                'Wikimapia',
            ],
        },
    ];

    const titlesByOrder = [
        'OpenStreetMap',
        'OpenTopoMap',
        'ESRI Satellite',
        'Yandex Satellite',
        'Google Satellite',
        'Bing Satellite',
        'Yandex map',
        'Google Map',
        'Topomapper 1km',
        'OpenRailwayMap',
        'Wikimapia',
    ];

function getLayers() {
    // set metadata
    for (let layer of layersDefs) {
        layer.layer.meta = {title: layer.title};
    }

    // assign order to layers
    const orderByTitle = {};
    for (let i = 0; i < titlesByOrder.length; i++) {
        let title = titlesByOrder[i];
        orderByTitle[title] = i + 1;
    }

    for (let layer of layersDefs) {
        const title = layer.title;
        layer.order = orderByTitle[title];
        if (!layer.order) {
            throw new Error(`Layer title not found in titlesByOrder list: ${title}`);
        }
    }

    // divide layers by groups
    const grouppedLayers = [];
    const layersByTitle = {};
    for (let layer of layersDefs) {
        layersByTitle[layer.title] = layer;
    }
    for (let groupDef of groupsDefs) {
        let group = {group: groupDef.title, layers: []};
        grouppedLayers.push(group);
        for (let title of groupDef.layers) {
            let layer = layersByTitle[title];
            group.layers.push(layer);
        }
    }

    return {
        layers: grouppedLayers,
        customLayersOrder: {
            top: orderByTitle['#custom-top'],
            bottom: orderByTitle['#custom-bottom'],

        }
    };
}

export {getLayers, layersDefs, groupsDefs, titlesByOrder};
