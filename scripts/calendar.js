const calendarContainer = document.querySelector('.day-list');

for (i = 1; i <= 30; i++) {
    const today = new Date().getDate();
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.id = `day-${i}`;
    dayDiv.innerHTML = `
        <p>День ${i}</p>
    `;
    
    if (i <= today) {
        dayDiv.classList.add('active');
        if (i == today) {
            dayDiv.classList.add('today');
        }
        if (i % 7 == 0) {
            dayDiv.innerHTML = `
                <p>День ${i}</p>
                <p>Случайный Immortal</p>
            `;
        }
        else if (i % 10 == 0) {
            dayDiv.innerHTML = `
                <p>День ${i}</p>
                <p>Случайный Arcana</p>
            `;
        }
        else {
            dayDiv.innerHTML = `
                <p>День ${i}</p>
                <p>1000 осколков</p>
            `;
        }
    }


    calendarContainer.appendChild(dayDiv);
}