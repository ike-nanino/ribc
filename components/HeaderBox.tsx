

interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
}

function HeaderBox({type='greeting', title, subtext, user}: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
            <span className="text-blue-700">
              &nbsp;{user}
            </span>
        )}
      </h1>

        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox
