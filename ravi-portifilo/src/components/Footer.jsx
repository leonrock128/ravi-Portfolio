import React,{useEffect} from 'react'

const Footer = () => {
  useEffect(()=> {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 })
    revealElements.forEach(el => observer.observe(el))
    return ()=> observer.disconnect()
  },[])
  return (
    <footer>
      <p>&copy; 2025 Ravi L. All Rights Reserved.</p>
  </footer>
  )
}

export default Footer