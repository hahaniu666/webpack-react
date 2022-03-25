import BindInfo from 'bundle-loader?lazy&name=userBind-chunk!../modules/userBind/info/Info';

import Bundle from './Bundle';
<Route path='userBind'>
    <IndexRoute component={Bundle(UserBind)} />
    <Route path="info/:id" component={Bundle(BindInfo)} />
</Route>