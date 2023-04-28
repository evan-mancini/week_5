// my token

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbm1hbmNpbmkiLCJhIjoiY2xnNXE5d2NlMDJxazNxcDhyc2g1eGo2eCJ9.9FsLDvuMxvT0C4cWbIsQAw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.91770592106197, 40.70528610017079],
    zoom: 10
})

// adding 3D buildings

map.on('style.load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id; map.addLayer(
        {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );
});

// adding 2006 NYPD arrests data

const arrests_16 = [
    {
        "Longitude": -73.88490753,
        "Latitude": 40.66097671,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.94803075,
        "Latitude": 40.82711561,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.08507197,
        "Latitude": 40.64465764,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.99393724,
        "Latitude": 40.75898648,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.94285249,
        "Latitude": 40.81909584,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.79152389,
        "Latitude": 40.71125873,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.79102208,
        "Latitude": 40.67457937,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.76573664,
        "Latitude": 40.71236744,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93583543,
        "Latitude": 40.76370346,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89940208,
        "Latitude": 40.85837313,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91621424,
        "Latitude": 40.81070267,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.00524693,
        "Latitude": 40.67575441,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.00216698,
        "Latitude": 40.75095549,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91409889,
        "Latitude": 40.81230952,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90937635,
        "Latitude": 40.84484177,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9581494,
        "Latitude": 40.61822447,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.88516405,
        "Latitude": 40.63549437,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.91556606,
        "Latitude": 40.82901222,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.84689421,
        "Latitude": 40.87222555,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.82372905,
        "Latitude": 40.81855258,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91556606,
        "Latitude": 40.82901222,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.77489426,
        "Latitude": 40.70942685,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.77489426,
        "Latitude": 40.70942685,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91535378,
        "Latitude": 40.83113922,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.92012953,
        "Latitude": 40.69982865,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93608359,
        "Latitude": 40.8399082,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90849839,
        "Latitude": 40.77628884,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.8620303,
        "Latitude": 40.82151692,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.92311038,
        "Latitude": 40.86702345,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.85526919,
        "Latitude": 40.74394781,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.97734909,
        "Latitude": 40.72189458,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.93562161,
        "Latitude": 40.84673404,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91476212,
        "Latitude": 40.82756516,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91337278,
        "Latitude": 40.83450277,
        "PD_DESC": "MARIJUANA, SALE 1, 2 & 3"
    },
    {
        "Longitude": -73.99635737,
        "Latitude": 40.72856377,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.83079629,
        "Latitude": 40.88374452,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90436867,
        "Latitude": 40.86122636,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9582767,
        "Latitude": 40.65660762,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.77815221,
        "Latitude": 40.67665778,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90436867,
        "Latitude": 40.86122636,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9213783,
        "Latitude": 40.86111843,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89001544,
        "Latitude": 40.6606441,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.9115323,
        "Latitude": 40.66137356,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94619006,
        "Latitude": 40.75746721,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.98567276,
        "Latitude": 40.71793523,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.81490724,
        "Latitude": 40.73120923,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.85049481,
        "Latitude": 40.89828288,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90849839,
        "Latitude": 40.77628884,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.82405583,
        "Latitude": 40.820672,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.76573664,
        "Latitude": 40.71236744,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90655204,
        "Latitude": 40.84593465,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.95840238,
        "Latitude": 40.6573515,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.88756993,
        "Latitude": 40.66169848,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.9390536,
        "Latitude": 40.65133455,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9213783,
        "Latitude": 40.86111843,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.82668524,
        "Latitude": 40.82377203,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91337278,
        "Latitude": 40.83450277,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.98567276,
        "Latitude": 40.71793523,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.85447142,
        "Latitude": 40.74239328,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.90446547,
        "Latitude": 40.66799655,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.84946141,
        "Latitude": 40.87862132,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9581494,
        "Latitude": 40.61822447,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.98112383,
        "Latitude": 40.59043398,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.73633944,
        "Latitude": 40.72124359,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.76573664,
        "Latitude": 40.71236744,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94402025,
        "Latitude": 40.83533415,
        "PD_DESC": "MARIJUANA, POSSESSION"
    },
    {
        "Longitude": -73.90655204,
        "Latitude": 40.84593465,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.87495131,
        "Latitude": 40.68651472,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91337278,
        "Latitude": 40.83450277,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.9028015,
        "Latitude": 40.85007606,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.96182075,
        "Latitude": 40.65448439,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.88516405,
        "Latitude": 40.63549437,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.92563378,
        "Latitude": 40.69263006,
        "PD_DESC": "MARIJUANA, SALE 1, 2 & 3"
    },
    {
        "Longitude": -73.94110929,
        "Latitude": 40.80069433,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.76573664,
        "Latitude": 40.71236744,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.86815295,
        "Latitude": 40.83136939,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.98271182,
        "Latitude": 40.75677857,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9520175,
        "Latitude": 40.66003616,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.08507197,
        "Latitude": 40.64465764,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89940208,
        "Latitude": 40.85837313,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9302142,
        "Latitude": 40.83319398,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90880353,
        "Latitude": 40.83557792,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.99635737,
        "Latitude": 40.72856377,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.73633944,
        "Latitude": 40.72124359,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89638751,
        "Latitude": 40.82100396,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.87980701,
        "Latitude": 40.82721564,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91674855,
        "Latitude": 40.82252457,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90849839,
        "Latitude": 40.77628884,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.84272964,
        "Latitude": 40.90244997,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90460702,
        "Latitude": 40.82611074,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.8150238,
        "Latitude": 40.7256156,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.98548838,
        "Latitude": 40.75294454,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.95840238,
        "Latitude": 40.6573515,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.84689421,
        "Latitude": 40.87222555,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.97972983,
        "Latitude": 40.72289961,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.73633944,
        "Latitude": 40.72124359,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94975055,
        "Latitude": 40.69811894,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.85447142,
        "Latitude": 40.74239328,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.93460435,
        "Latitude": 40.69763374,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.77489426,
        "Latitude": 40.70942685,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93562161,
        "Latitude": 40.84673404,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.00609671,
        "Latitude": 40.62504175,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90446547,
        "Latitude": 40.66799655,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.88040582,
        "Latitude": 40.82978807,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91337278,
        "Latitude": 40.83450277,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.98567276,
        "Latitude": 40.71793523,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93902532,
        "Latitude": 40.84395001,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.92758916,
        "Latitude": 40.70177139,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.96066365,
        "Latitude": 40.6609562,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.84272964,
        "Latitude": 40.90244997,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.89691013,
        "Latitude": 40.75651965,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.80635687,
        "Latitude": 40.74205893,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94804678,
        "Latitude": 40.75566751,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.97972983,
        "Latitude": 40.72289961,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89638751,
        "Latitude": 40.82100396,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.91214858,
        "Latitude": 40.83658782,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.87074717,
        "Latitude": 40.75899099,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.84272964,
        "Latitude": 40.90244997,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.82372905,
        "Latitude": 40.81855258,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.95861338,
        "Latitude": 40.68904826,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.83079629,
        "Latitude": 40.88374452,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.79152389,
        "Latitude": 40.71125873,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.78433729,
        "Latitude": 40.67933472,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.98478504,
        "Latitude": 40.7666517,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.87027602,
        "Latitude": 40.68768156,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9028015,
        "Latitude": 40.85007606,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93562161,
        "Latitude": 40.84673404,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.84946141,
        "Latitude": 40.87862132,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9693386,
        "Latitude": 40.80366137,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.77815221,
        "Latitude": 40.67665778,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.88618429,
        "Latitude": 40.65838142,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.87074717,
        "Latitude": 40.75899099,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9115323,
        "Latitude": 40.66137356,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.89556651,
        "Latitude": 40.85147777,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.08165623,
        "Latitude": 40.61549122,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.78433729,
        "Latitude": 40.67933472,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.99275391,
        "Latitude": 40.75317304,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93388988,
        "Latitude": 40.66895868,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.80264371,
        "Latitude": 40.67984791,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94168973,
        "Latitude": 40.79366812,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9302142,
        "Latitude": 40.83319398,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93858143,
        "Latitude": 40.81974139,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.92012953,
        "Latitude": 40.69982865,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.86534635,
        "Latitude": 40.75580913,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93284095,
        "Latitude": 40.66531301,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.88641487,
        "Latitude": 40.66478796,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.86789492,
        "Latitude": 40.82665092,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.79821496,
        "Latitude": 40.67910463,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93421097,
        "Latitude": 40.59559339,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91859995,
        "Latitude": 40.70019263,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.93003877,
        "Latitude": 40.83507126,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.01230103,
        "Latitude": 40.64995569,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.93460435,
        "Latitude": 40.69763374,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.91608758,
        "Latitude": 40.82807391,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.80635687,
        "Latitude": 40.74205893,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.96595952,
        "Latitude": 40.800106,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.73633944,
        "Latitude": 40.72124359,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.86789492,
        "Latitude": 40.82665092,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90937635,
        "Latitude": 40.84484177,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.95694205,
        "Latitude": 40.66951308,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90648926,
        "Latitude": 40.68746965,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9213783,
        "Latitude": 40.86111843,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.09703788,
        "Latitude": 40.57446371,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -74.14003388,
        "Latitude": 40.63696235,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9039135,
        "Latitude": 40.67330998,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.9693386,
        "Latitude": 40.80366137,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.99635737,
        "Latitude": 40.72856377,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.85526919,
        "Latitude": 40.74394781,
        "PD_DESC": "MARIJUANA, SALE 4 & 5"
    },
    {
        "Longitude": -73.87962071,
        "Latitude": 40.82234083,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.90880353,
        "Latitude": 40.83557792,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    },
    {
        "Longitude": -73.94110929,
        "Latitude": 40.80069433,
        "PD_DESC": "MARIJUANA, POSSESSION 4 & 5"
    }
]

// adding on.click for arrest info

arrests_16.forEach(function (description) {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${description.PD_DESC}`
    );
    new mapboxgl.Marker({
        color: '#a5a39a'
    })
        .setLngLat([description.Longitude, description.Latitude])
        .setPopup(popup)
        .addTo(map);
})

// trying to add precincts but not working, cannot tell why

map.on('load', function () {
    map.addSource('nypd123', {
    type: 'geojson',
    data: './data/nypd123.geojson'
})

    map.addLayer({
        id: 'fill-nypd',
        type: 'fill',
        source: 'nypd123',
        paint: {
        'fill-color': ['#38a832' ]
    }
})})