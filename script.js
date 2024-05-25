async function loadFileList() {
    const response = await fetch('resources/audio/emphTTS/en/vitsprosody030520241049PM/emph_filelist.txt');
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');

    // Get only the first 100 rows
    const first100Rows = rows.slice(0, 100);

    const tableBody = document.getElementById('table-body');

    first100Rows.forEach(row => {
        const [filePath, description] = row.split('|').map(item => item.trim());
        
        const newFilePath = filePath.replace('/project/tts/students/yining_ws/multi_lng/TTS/data/emph_fake_audio/', 'resources/audio/emphTTS/en/vitsprosody030520241049PM/');

    // Debugging: Print the new file path and description
        // Debugging: Print the filePath and description
        console.log('File Path:', newFilePath);
        console.log('Description:', description);

        const tr = document.createElement('tr');

        // Create description cell
        const descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = processDescription(description);
        // descriptionCell.textContent = description;
        tr.appendChild(descriptionCell);

        // Create audio player cell
        const audioCell = document.createElement('td');
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = newFilePath; // Ensure this path is accessible
        audioCell.appendChild(audio);
        tr.appendChild(audioCell);

        tableBody.appendChild(tr);
    });
}

// Function to process description and wrap hashtag words in <strong> tags, removing the hashtags
function processDescription(description) {
    return description.split(' ').map(word => {
        if (word.startsWith('#')) {
            // Remove hashtags and wrap the word in both <strong> and <u> tags
            return `<strong><u>${word.replace(/#/g, '')}</u></strong>`;
        }
        return word;
    }).join(' ');
}

document.addEventListener('DOMContentLoaded', loadFileList);
