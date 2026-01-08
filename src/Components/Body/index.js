const Body = () => {
    return (
        <main>
            <section>
                <h4>First Section</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
            <section>
                <h4>Second Section</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </section>
            <section>
                <h4>Third Section</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </section>

             <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 p-2 bg-primary text-white text-center">
              <span>Primary</span>
            </div>
            <div class="col-lg-3 p-2  bg-success text-white text-center">
              <span>Success</span>
            </div>
            <div class="col-lg-3 p-2 bg-danger text-white text-center">
              <span>Danger</span>
            </div>
            <div class="col-lg-3 p-2 bg-warning text-white text-center">
              <span>Warning</span>
            </div>
        </div>
    </div>

        </main>
    )
}

export default Body;