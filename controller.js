module.exports = {
  getPlanes: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let count = req.query.count;

    dbInstance.get_planes({count})
      .then((planes) => {
        res.status(200).json(planes);
      })
      .catch((err) => {
        console.log(error);
        res.status(500).send(error);
      })
  }
}
