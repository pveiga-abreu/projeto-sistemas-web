const user_dao = require('../database/user_dao');
const functions = require('../functions/index')

module.exports = {
    search_user: () => {
        try{
            const users =  user_dao.search_user();
            return users;
        }catch(err){
            return err
        }
    },
    search_user_by_id: (id) => {
        try{
            const user = user_dao.search_user_by_id(id);
            return user;
        }catch(err){
            return err
        }
    },
    insert_user: user => {
        try{
            let err = functions.validate_user(user);

            if(err.length > 0) {
                throw err;
            }
            user_dao.insert_user(user);

            return {status: true};
        } catch(err) {
            return {status: false, message: err};
        }
    },
    update_user: (id, user) => {
        try{
            let err = functions.validate_user(user);

            if(err.length > 0) {
                throw err;
            }
            user_dao.modify_user(id, user);

            return {status: true}
        }catch(err){
            return {status: false, message: err}
        }
    },
    remove_user: id => {
        try{
            user_dao.remove_user(id);
            return {status: true}
        }catch(err){
            return {status: false, message: err}
        }
    }
}
