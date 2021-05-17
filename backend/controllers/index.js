exports.get = async(req, res, next) => {
    try {
        res.render('index', { title: 'iGen Technologies, Inc.' });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};