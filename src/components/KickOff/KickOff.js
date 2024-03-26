import React from 'react';
import "./KickOff.css"

const KickOff = () => {
  return (
    <div>
      <div>
        <h2>Kick Off your ACCA Prep journey with IndigoLearn</h2>
        <p>Sign In and get instant access to our FREE courses</p>
      </div>
      <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="exampleModalLabel">Aspiring to be in ACCA? Get in touch with us!</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type='text'/>
        <label></label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Request Call Back</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default KickOff
