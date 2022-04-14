import crypto from 'crypto';

export class Generation{
    static solve(user_value, comp_value, n) {
        let a = (Math.abs((user_value - comp_value) % n));
        if (a == 0) { return 'Tie';
        } else if(a > ((n - 1)/2)) {
            if(user_value > comp_value) return 'You win!';
            else return 'You loose!';
        } else if(a <= ((n - 1)/2)){
            if(user_value < comp_value) return 'You win!';
            else return 'You loose!';
        }};
    static create_hmac(comp_value, key){
        console.log('HMAC:');
        return crypto.createHmac('sha3-256', `${comp_value}` + `${key}`).digest('hex');
    };
    static create_hmac_key(key){
        console.log('HMAC key:');
        return crypto.createHmac('sha3-256', `${key}`).digest('hex');
    }
}