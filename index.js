const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

// Endpoint to generate the farmer profile
app.post('/generate-profile', (req, res) => {
    const { name, phone, address, products, journey } = req.body;
    const fileName = `${name}_${Date.now()}.html`;
    const filePath = path.join(__dirname, 'public', fileName);

    // HTML content for the farmer profile
    const htmlContent = `
        <html>
            <head><title>${name}'s Profile</title></head>
            <body>
                <h1>${name}'s Profile</h1>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Products Selling:</strong> ${products}</p>
                <h2>Journey</h2>
                <p>${journey}</p>
            </body>
        </html>
    `;

    // Write the HTML content to a file
    fs.writeFileSync(filePath, htmlContent);

    // Send the URL of the newly created profile
    res.send({ url: `https://${req.hostname}/${fileName}` });
});

// Serve static files from the public directory
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
