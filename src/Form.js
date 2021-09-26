import "./styles.css";

export default function Form(props) {
  function formHandler(e) {
    e.preventDefault();
    props.handleForm(e.target.dob.value, e.target.num.value);
  }
  return (
    <div className="Form">
      <form onSubmit={formHandler.bind(this)}>
        <div className="forminp">
          <label>Date of Birth</label>
          <input type="date" name="dob" />
        </div>
        <br />
        <div className="forminp">
          <label>Lucky Number</label>
          <input type="number" name="num" />
        </div>
        <input className="sub-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
