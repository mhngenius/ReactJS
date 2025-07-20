// /*Modules: */ import styles from './Button.module.css'
function Button() {
    // Inline: 
    const styles = {
        button: {
            // 1.No dashes (camel case prefered) 
            // 2.values must be strings (in ""s)
            // 3.objects must be comma seprated (,)
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
        }
    };

    return (
        <button  /* className="button" */ /*style={styles.button}*/ style={
            styles.button
        }>
            Click Me!
        </button>
    );
}

export default Button;
