
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Newsletter from './Newsletter'

export default function Mailchimp() {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U};id=${process.env.REACT_APP_MAILCHIMP_ID};`;
    //https://163.us21.list-manage.com/subscribe/post?u=7774d008f697f9c47775ca29f&amp;id=9a911d9887&amp;

    return (
        <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) =>
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                // 函数的参数传递方法
                />
            }
        />

    )
}
