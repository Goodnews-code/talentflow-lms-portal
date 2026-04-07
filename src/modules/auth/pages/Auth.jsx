const AuthPage = ({sectionImage, rest}) => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Side: Image Section */}
      <div className="hidden md:block w-1/2 relative">
        <img src={sectionImage} loading="lazy" alt="Collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8 md:p-16">
        {rest}
      </div>
    </div>
  );
};

export default AuthPage;