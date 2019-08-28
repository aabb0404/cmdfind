import {CronJob} from 'cron';
const { exec } = require('child_process');
const refreshReceiverIp = new CronJob('* * * * * ', () => {
  /**
   * 因Receiver為動態IP，所以每天更新一次IP
   */
  // [TODO] 讀取receiver IP與MAC，並更新到DB
  //console.log('test')
  exec('open.bat', (error, stdout) => {});
});


refreshReceiverIp.start();