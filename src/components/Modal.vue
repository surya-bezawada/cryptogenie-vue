<template>
  <div class="row">
    <div class="col-sm-2">
      <p class="mb-0">Name:</p>
    </div>
    <div class="col-sm-10">
      <div class="ng-star-inserted">
        <form novalidate="" class="ng-touched ng-pristine ng-valid">
          <div class="row">
            <div class="form-group col-md-6">
              <input
                type="text"
                placeholder="Firstname"
                formcontrolname="firstname"
                class="form-control ng-touched ng-pristine ng-valid"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                _ngcontent-pjx-c62=""
                type="text"
                placeholder="Lastname"
                formcontrolname="lastname"
                class="form-control lastName-margin ng-touched ng-pristine ng-valid"
              />
            </div>
            <div class="form-group col-md-12 d-flex justify-content-end mt-2">
              <button class="fs-16 btn btn-lg btn-outline-dark">Cancel</button>
              &nbsp;&nbsp;
              <button class="main-btn fs-16">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:'modal-view',
    }
</script>
