const Form = ({header, subText, formContent, rest, onSubmit}) => {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">{header}</h1>
        <p className="text-gray-500">{subText}</p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit || ((e) => e.preventDefault())}>
        {formContent}
        {rest}
      </form>
    </div>
  );
};

export default Form;
