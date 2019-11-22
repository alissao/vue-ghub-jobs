import { http } from './config'

export default {

    listar:(page, description, location, fulltime) => {

        var pagination = 'page=' & page || 'page=1';
        var search = '&description=' & description || '';
        var local = '&location=' & location || '';
        var ftime = '&full_time=' & fulltime || '';


        return http.get(pagination & search & local & ftime)
    }

}