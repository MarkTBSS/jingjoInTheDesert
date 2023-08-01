function jingJo (a, b, c) {
    var count = 0
    var line = [a, b, c] // [ a, b, c ]
    var leftRange = line[1] - line[0]        // ความกว้างช่องขวา
    var rightRange = line[2] - line[1]       // ความกว้างช่องซ้าย
    while ((line[2] - line[0]) !== 2) {      // ทำจนกว่าจะกว้างช่องละ 1
        if (rightRange >= leftRange) {       // ถ้าช่องขวามากกว่า (ทำตัวซ้ายก่อน)
            line[0] = line[2] - 1            // ตัวซ้ายโดดชิดตัวขวาสุด
            count++                          // นับโดด 1
            line.sort((a, b) => a - b)       // เรียงลำดับใหม่
            console.log(line)                // เอาตำแหน่งจิงโจ้มาดู (ไม่ทำก็ได้)   
            if (line[0] + 1 !== line[1]) {   // ถ้าตัวซ้ายสุดไม่ได้อยู่ชิดตัวกลาง (มีช่องให้ตัวขวาลง)
                line[2] = line[0] + 1        // ตัวขวาโดดมาลงตรงกลาง
                count++                      // นับโดด 1
                line.sort((a, b) => a - b)   // เรียงลำดับใหม่
                console.log(line)            // เอาตำแหน่งจิงโจ้มาดู (ไม่ทำก็ได้) 
            }
        }                                    
        if (leftRange > rightRange) {        // ถ้าช่องซ้ายมากกว่า (ทำตัวขวาก่อน)
            line[2] = line[0] + 1            // ตัวขวาโดดชิดตัวซ้ายสุด
            count++                          // นับโดด 1
            line.sort((a, b) => a - b)       // เรียงลำดับใหม่
            console.log(line)                // เอาตำแหน่งจิงโจ้มาดู (ไม่ทำก็ได้) 
            if (line[2] - 1 !== line[1]) {   // ถ้าตัวขวาสุดไม่ได้อยู่ชิดตัวกลาง (มีช่องให้ตัวซ้ายลง)
                line[0] = line[2] - 1        // ตัวซ้ายโดดมาลงตรงกลาง
                count++                      // นับโดด 1
                line.sort((a, b) => a - b)   // เรียงลำดับใหม่
                console.log(line)            // เอาตำแหน่งจิงโจ้มาดู (ไม่ทำก็ได้)
            }
        }
    }
    console.log(count)
}
var a = 3
var b = 5
var c = 9
jingJo (a, b, c)