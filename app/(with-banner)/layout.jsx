export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>
        La mejor pagina de todo internet
      </marquee>
      {children}
    </div>
  )
}
