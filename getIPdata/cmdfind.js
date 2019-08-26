const fs = require('fs');
const iconv = require('iconv-lite');
const { exec } = require('child_process');
exec("find.bat", { encoding: 'buffer' }, (error, stdout) => {
    console.log(iconv.decode(stdout, 'big-5'))
    console.log(error)
    fs.writeFile('../cmd/test.txt',iconv.decode(stdout, 'big-5') , function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
            exec('del.bat', { encoding: 'big-5' }, (error, stdout) => {
            });
        }
    });
});
