import React from 'react'

function Record() {
    return (
        <section class="get-in-touch">
   <h1 class="title">Publish A Book</h1>
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" required />
         <label class="label" for="name">Book's Name</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="author" class="input-text js-input" type="text" required /> 
         <label class="label" for="author">Book's Author</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="Description" class="input-text js-input" type="text" required />
         <label class="label" for="Description">Description</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="ebook" class="input-text js-input" type="url"  />
         <label class="label" for="ebook">Ebook</label>
      </div>
      <select class="form-field col-lg-6 " aria-label="Default select example" required>
        <option selected>Category</option>
         <option > Arts &amp; Music</option>
        <option>Biographies</option>
        <option >Comics</option>
        <option >Computers 	&amp; Tech</option>
        <option >Cooking</option>
        <option >Edu &amp; Reference</option>
        <option >Entertainment</option>
        <option >Gay &amp; Lesbian</option>
        <option >Health &amp;  Fitness</option>
        <option >Hobbies &amp; Crafts</option>
        <option >Home &amp; Garden</option>
        <option >Horror</option>
        <option >Kids</option>
        <option >Literature &amp; Fiction</option>
        <option >Medical</option>
        <option >Mysteries</option>
        <option >Parenting</option>
        <option >Religion</option>
        <option >Romance</option>
        <option >Sci-Fi &amp; Fantasy</option>
        <option >Science &amp; Math</option>
        <option >Self-Help</option>
        <option >Social Sciences</option>
        <option >Sports</option>
        <option >Teen</option>
        <option >Travel</option>
        <option >True Crime</option>
        <option >Offers</option>
        <option >Special Editions</option>
        <option >Website</option>
        <option>Others</option>
</select>

    <div class="form-field col-lg-6 ">
         <input id="cover"  type="image"  />
         <label class="label" for="cover">Cover</label>
      </div>

      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Submit" />
      </div>
   </form>
</section>
    )
}

export default Record
