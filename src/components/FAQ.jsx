import React from 'react'
import PhoneGreen from '../assets/image/icongreen.svg'
import PhoneIcon from '../assets/image/iconphone.svg'

const FAQ = () => {
  return (
    <section class="sixth-background">
    <div class="phone-container">
        <div class="the-left-text">
         <h2>Any questions?<br />Check out the FAQs</h2>
         <p class="phony-p">Still have unanswered questions and need to get<br />in touch?</p>
         <div class="call-feature">
           <div class="the-phone"><img src={PhoneIcon} alt="" />
           <p class="phone-p">Still have questions?</p>
           <a href="" class="the-phone-1">
           <span>Contact us</span>
           <i class="fa-solid fa-arrow-right"></i>
           </a>
         </div>
         </div>
         <div class="call-feature-2">
           <div class="the-phones"><img src={PhoneGreen} alt="" />
           <p class="phone-p">Dont like phone calls?</p>
           <a href="#" class="the-phone-1">
           <span class="phones-green">Contact us</span>
           <i class="fa-solid fa-arrow-right"></i>
           </a>
         </div>
         </div>
        </div>
        
        <div class="the-right-stuff">
        <ul class="the-right-side">
          <li>
            <input type="radio" name="accordion" id="first-collapse" class="input-radio" />
            <label for="first-collapse" class="lab-text">Is any of my personal information stored in the App<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second-collapse" class="input-radio" />
            <label for="second-collapse" class="lab-text">What formats can i download my transaction history in?<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third-collapse" class="input-radio" />
            <label for="third-collapse" class="lab-text">Can i schedule future transfers?<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth-collapse" class="input-radio" />
            <label for="fourth-collapse" class="lab-text">When can i use Banking App services?<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth-collapse" class="input-radio" />
            <label for="fifth-collapse" class="lab-text">Can i create my own password that is easy for me to remeber?<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth-collapse" class="input-radio" />
            <label for="sixth-collapse" class="lab-text">What happens if i forget or lose my password?<span class="circles"><i class="fa-solid fa-chevron-up"></i></span></label>
            <div class="all-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus nesciunt veritatis ipsa deserunt nemo facilis labore! Numquam quasi reprehenderit praesentium saepe libero ea voluptate. Nostrum nam ullam omnis praesentium?</p>
            </div>
          </li>
        </ul>
        </div>
        </div>
</section>
  )
}

export default FAQ