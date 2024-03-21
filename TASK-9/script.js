document.addEventListener('DOMContentLoaded', () => {
    var noteInput = document.getElementById('noteInput');
    var saveNoteBtn = document.getElementById('saveNoteBtn');
    var notesContainer = document.getElementById('notesContainer');

    saveNoteBtn.addEventListener('click', () => {
        var noteText = noteInput.value.trim();

        if (noteText !== '') {
            var note = document.createElement('div');
            note.className = 'note mb-2';
            note.innerHTML = `<span>${noteText}</span><button class="btn btn-danger btn-sm ms-2" onclick="this.parentElement.remove()">Delete</button>
            <button class=" edit btn btn-sm ms-2" onclick="var updatedNote = prompt('Enter the updated note:');
             if(updatedNote !== null) this.parentElement.querySelector('span').textContent = updatedNote;">Edit</button>`;
            notesContainer.appendChild(note);

            noteInput.value = '';
        } else {
            alert('Please enter a note before saving.');
        }
    });
});