let notes = [];

function showCreate() {
  document.getElementById('placeholder').style.display = 'none';
  document.getElementById('noteForm').style.display = 'block';
  document.getElementById('noteList').style.display = 'none';
}

function showList() {
  document.getElementById('placeholder').style.display = notes.length === 0 ? 'block' : 'none';
  document.getElementById('noteForm').style.display = 'none';
  document.getElementById('noteList').style.display = 'flex';
  renderNotes();
}

function addNote() {
  const title = document.getElementById('title').value.trim();
  const body = document.getElementById('body').value.trim();

  if (title && body) {
    notes.push({ title, body });
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
    showList();
  } else {
    alert("Please fill in both title and body.");
  }
}

function renderNotes() {
  const listDiv = document.getElementById('noteList');
  listDiv.innerHTML = '';

  notes.forEach((note, index) => {
    const card = document.createElement('div');
    card.className = 'note-card';

    const title = document.createElement('h3');
    title.textContent = note.title;
    
    const body = document.createElement('p');
    body.textContent = note.body;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      notes.splice(index, 1);
      renderNotes();
      if (notes.length === 0) {
        showCreate();
      }
    };

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(delBtn);
    listDiv.appendChild(card);
  });
}
