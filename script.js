async function loadFileList() {
    const response = await fetch('/project/tts/students/yining_ws/multi_lng/TTS/data/emph_fake_audio/emph_filelist.txt');
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');

    const tableBody = document.getElementById('table-body');

    rows.forEach(row => {
        const [filePath, description] = row.split('|');
        const tr = document.createElement('tr');

        const filePathCell = document.createElement('td');
        filePathCell.textContent = filePath;
        tr.appendChild(filePathCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;
        tr.appendChild(descriptionCell);

        tableBody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', loadFileList);
