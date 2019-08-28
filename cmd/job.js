import {CronJob} from 'cron';
const { exec } = require('child_process');
const refreshReceiverIp = new CronJob('0 0 * * *', () => {
  /**
   * 因Receiver為動態IP，所以每天更新一次IP
   */
  // [TODO] 讀取receiver IP與MAC，並更新到DB
  exec('../open.bat', { encoding: 'big-5' }, (error, stdout) => {

    });
});


refreshReceiverIp.start();