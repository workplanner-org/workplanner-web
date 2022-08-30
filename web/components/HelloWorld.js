import styles from "../styles/HelloWorld.module.css";

export default function HelloWorld() {

    function reset() {
        const els = document.querySelectorAll(`.${styles.input}`);
        els.forEach(el => {
            el.value = '';
        });
    }
    
    function submit() {
        const els = document.querySelectorAll(`.${styles.input}`);
        const message = {
            firstName: els[0].value,
            lastName: els[1].value,
            email: els[2].value
        }
        
        // send request to API
        console.log(message);

        setTimeout(() => {
            reset();
        });
    }

    return(
        <section>
            <div className="row centerText">
                <p className={styles.title}>Workplanner Skeleton Demo</p>
            </div>
            <div className="row centerItem">
                <form className={styles.form}>
                    <input type="text" className={styles.input} placeholder="First Name" id="firstName" />
                    <input type="text" className={styles.input} placeholder="Last Name" id="lastName" />
                    <input type="email" className={styles.input} placeholder="Email" id="email" />
                    <div className="row">
                        <div className="col-6 alignLeft">
                            <button type="button" className={styles.btn} onClick={reset}>reset</button>
                        </div>
                        <div className="col-6 alignRight">
                            <button type="button" className={styles.btn} onClick={submit}>Submit</button>
                        </div>
                    </div>
                </form> 
            </div>
        </section>
    );
}