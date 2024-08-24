let tableBody = document.querySelector('tbody');

let Students = [
    ['Om' , 9637272740 , 'Male' , 25],
    ['Pooja' , 8788005680 , 'Female' , 20],
    ['Sanjay' , 9890167863 , 'Male' , 50],
    ['Shubhangi' , 9923328506 , 'Female' , 48]
];



for(let i=1; i<Students.length; i++){}

Students.forEach((student, i) => {
    let row = document.createElement('tr');
    let srCell = document.createElement('td');
    srCell.textContent = i + 1;
    row.appendChild(srCell);
    student.forEach(data => {
        let col = document.createElement('td');
        col.textContent = data;
        row.appendChild(col);
    }); 
    tableBody.appendChild(row);
});