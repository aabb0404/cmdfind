
import {queryPromise} from '../db';
const update = async (mac,ip) => {
    const queryStr = `SELECT * FROM testing.company`;
    /*const queryStr  = `UPDATE testing.rec SET rip='${ip}' WHERE rmac='${mac}'` ;
    await queryPromise(queryStr);*/
    const results = await queryPromise(queryStr);
    console.log(results)
    return results;
};
export {update};
