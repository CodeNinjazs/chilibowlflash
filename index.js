app.get('/blank', (req, res) => {
  res.sendFile(path.join(__dirname, 'blank.html'));
