

function Job(props) {
  // eslint-disable-next-line react/prop-types
  const { bgColor, icon, title } = props;

  return ( 
    <div className={`${bgColor} p-4 flex flex-col items-center justify-center`}>
        {icon}
        <p className="pt-2">{title}</p>
    </div>
   );
}

export default Job;