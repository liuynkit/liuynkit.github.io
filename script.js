async function loadFileList() {
    const response = await fetch('/project/tts/students/yining_ws/multi_lng/TTS/data/emph_fake_audio/emph_filelist.txt');
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');

    const tableBody = document.getElementById('table-body');

    rows.forEach(row => {
        const [filePath, description] = row.split('|').map(item => item.trim());
        const tr = document.createElement('tr');

        // Create description cell
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;
        tr.appendChild(descriptionCell);

        // Create audio player cell
        const audioCell = document.createElement('td');
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = filePath; // Ensure this path is accessible
        audioCell.appendChild(audio);
        tr.appendChild(audioCell);

        tableBody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', loadFileList);
