const Copyright = () => {
  const date = new Date();
  return (
    <div className="h-[5vh] bg-complementryBlue text-white text-center">
      <h3>Copyright EduTech &copy; {date.getFullYear()}</h3>
    </div>
  );
};

export default Copyright;
