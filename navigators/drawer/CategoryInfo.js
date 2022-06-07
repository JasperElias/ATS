/*
    Array containing category titles and exercises that 
    belong to each category. Only includes names, and not
    relevant data. 

    Note: Each exercise has a unique id to prevent a warning 
    from React about needing a "unique key prop". Unique keys 
    are not technically needed since this array is static, and 
    will not change.
*/

const categoryInfo = [
    {
        'title': 'Agility',
        'exercises': [
            { id: 'a0', eTitle: 'Description' },
            { id: 'a1', eTitle: 'Uphill Ski Pressure' },
            { id: 'a2', eTitle: 'Drift Turns' },
            { id: 'a3', eTitle: 'Fall Line Skiing' },
            { id: 'a4', eTitle: 'The Hump of the Bump' },
            { id: 'a5', eTitle: 'The Joy of Skiing' },
            { id: 'a6', eTitle: 'Nonstop Skiing' },
        ]
    },
    {
        'title': 'Balance',
        'exercises': [
            { id: 'b0', eTitle: 'Description' },
            // { id: 'b1', eTitle: 'Uphill Ski Pressure' },
            // { id: 'b2', eTitle: 'Drift Turns' },
            // { id: 'b3', eTitle: 'Fall Line Skiing' },
            // { id: 'b4', eTitle: 'The Hump of the Bump' },
            // { id: 'b5', eTitle: 'The Joy of Skiing' },
            // { id: 'b6', eTitle: 'Nonstop Skiing' },
        ]
    },
    {
        'title': 'Fluidity',
        'exercises': [
            { id: 'f0', eTitle: 'Description' },
            { id: 'f1', eTitle: 'Thousand Steps' },
            { id: 'f2', eTitle: 'Selective Edge Pressure' },
            { id: 'f3', eTitle: 'The Angle of Entry' },
            { id: 'f4', eTitle: 'Arcing a Turn' },
            { id: 'f5', eTitle: 'Shorten your Transitions Fun And Games' },
            { id: 'f6', eTitle: 'You Go Where You Look' },
            { id: 'f7', eTitle: 'Dropping and Settling In' },
        ]
    },
    {
        'title': 'Power',
        'exercises': [
            { id: 'p0', eTitle: 'Description' },
            { id: 'p1', eTitle: 'Power Position' },
            { id: 'p2', eTitle: 'Power Position Turn' },
            { id: 'p3', eTitle: 'Power Slide' },
            { id: 'p4', eTitle: 'Power Slide To Traverse' },
            { id: 'p5', eTitle: 'Power Slide To Carve' },
            { id: 'p6', eTitle: 'Long Turns for Stability' },
        ]
    },
    {
        'title': 'Upper Body',
        'exercises': [
            { id: 'u0', eTitle: 'Description' },
            { id: 'u1', eTitle: 'Look Down The Hill' },
            { id: 'u2', eTitle: 'Pole Clapping' },
            { id: 'u3', eTitle: 'Poles behind your Back Hand' },
            { id: 'u4', eTitle: 'Ski without Poles' },
            { id: 'u5', eTitle: 'Mogul Pole' },
            { id: 'u6', eTitle: 'Downhill Hand Sweep' },
        ]
    },

]

export default categoryInfo;