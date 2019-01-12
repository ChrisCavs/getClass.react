export default (...options) => {
    const classes = [];

    options.forEach(option => {
        if (typeof option === 'string') {
            return classes.push(option);
        }

        Object.keys(option).forEach(key => {
            if (option[key] instanceof Array) {
                key === 'true'
                    ? classes.push(option[key][0])
                    : classes.push(option[key][1])
            } else {
                option[key] 
                    ? classes.push(key)
                    : null
            }
        })
    })
    return classes
        .filter((item, i) => classes.indexOf(item) === i)
        .join(' ')
}