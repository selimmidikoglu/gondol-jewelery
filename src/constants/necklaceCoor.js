const xRanges = []
for (let i= 20; i <= 400; i+=20) {
    const element = i
    xRanges.push(element)
    
}

const yPercent = 320
const xPercent = 140
const beadH = 70
const beadW = 70
const coords = [
    [356,348,70], 
    [306,357,70],
    [261,382,50],
    [221,414,47],
    [185,450,40],
    [160,493,25],
    [145,543,10],
    [135,593,3],
    [131,643,0],
    [133,693,-7],
    [142,743,-10],
    [156,791,-14],
    [176,837,-21],
    [199,881,-28],
    [224,924,-34],
    [254,964,-41],
    [285,1004,-40],
    [321,1039,-44],
    [355,1077,-48],
    [388,1115,-48],
    [422,1149,-54],
    [472,1149,54],
    [504,1110,44],
    [533,1069,42],
    [564,1029,40],
    [596,989,36],
    [624,946,30],
    [649,903,24],
    [671,857,18],
    [690,811,10],
    [702,761,8],
    [710,711,0],
    [715,661,-6],
    [710,611,-12],
    [705,561,-16],
    [685,515,-20],
    [665,468,-34],
    [635,428,-40],
    [597,394,-46],
    [553,369,-54],
    [506,353,-60],
    [456,344,-85],
    [406,339,-100],

] 


export const dropBeadCoordinates = coords.map((el)=> [el[0],(el[1]-yPercent),el[2]])   