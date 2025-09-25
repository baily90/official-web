<template>
  <div class="container-home">
    <div class="container-banner">
      <div class="slogan wow fadeInDown" data-wow-delay="0.2s">llluminating Insight, <br />Empowering Wisdom</div>
      <div class="system-name">
        <div class="name wow fadeInUp" data-wow-delay="0.5s">Lucentia AI</div>
        <img class="bg-system-name wow fadeIn" data-wow-delay="0.3s" src="@/assets/images/bg_system_name.png" alt="">
      </div>
    </div>

    <div class="container-btn transition-hover wow fadeInUp" data-wow-delay="0.8s" @click="onFormDialogOpen">
      <img class="w-[42px] h-[42px]" src="@/assets/images/icon_email.png" alt="">
      <div>
        <div class="btn-main-text">Contact Us</div>
        <div class="btn-sub-text">Email Contact</div>
      </div>
    </div>

    <div class="container-skills">
      <div class="skills-item wow fadeInUp" data-wow-delay="0.1s">
        <img class="skills-icon wow fadeInUp" data-wow-delay="0.15s" src="@/assets/images/icon_platform.png" alt="">
        <div class="skills-title wow fadeInUp" data-wow-delay="0.2s">AI Platform</div>
        <div class="skills-desc wow fadeInUp" data-wow-delay="0.25s">Integrated platform for all your project needs
        </div>
      </div>
      <div class="mx-[63px] w-[1px] h-full bg-[#33312E] wow fadeInUp" data-wow-delay="0.2s"></div>
      <div class="skills-item wow fadeInUp" data-wow-delay="0.3s">
        <img class="skills-icon wow fadeInUp" data-wow-delay="0.35s" src="@/assets/images/icon_purpose.png" alt="">
        <div class="skills-title wow fadeInUp" data-wow-delay="0.4s">General Purpose Models</div>
        <div class="skills-desc wow fadeInUp" data-wow-delay="0.45s">General-Purpose Models ta Support a wide Array of
          Business and oporatenal
          Meeds</div>
      </div>
      <div class="mx-[63px] w-[1px] h-full bg-[#33312E] wow fadeInUp" data-wow-delay="0.4s"></div>
      <div class="skills-item wow fadeInUp" data-wow-delay="0.5s">
        <img class="skills-icon wow fadeInUp" data-wow-delay="0.55s" src="@/assets/images/icon_models.png" alt="">
        <div class="skills-title wow fadeInUp" data-wow-delay="0.6s">Task Oriented Models</div>
        <div class="skills-desc wow fadeInUp" data-wow-delay="0.65s">Niche AI Models Built for Meximum Eifectiveness in
          Defined Use cases</div>
      </div>
    </div>

    <div class="container-excellence">
      <div class="excellence-content">
        <div class="excellence-title">
          <div class="excellence-label wow fadeInLeft">Driving Operational Excellence</div>
          <div class="excellence-info wow fadeInRight">Boost efficiency, accuracy, 
            and agility across your organization.</div>
        </div>

        <div class="excellence-card wow fadeInUp" data-wow-delay="0.2s">
          <div class="card-content">
            <div class="card-btn transition-hover wow fadeInUp" data-wow-delay="0.2s" @click="onFormDialogOpen"><span
                class="mr-[10px]">·</span>
              Request Demo</div>
            <div class="card-label wow fadeInUp" data-wow-delay="0.4s">PRODUCT-Operational intelligence</div>
            <div class="card-desc wow fadeInUp" data-wow-delay="0.6s">Empower operatons with real-tme intelligence for
              better outcames</div>
          </div>
          <div class="bg-card"></div>
        </div>

        <div class="excellence-product wow fadeInUp">
          <div class="btn transition-hover wow fadeInUp" data-wow-delay="0.2s" @click="onFormDialogOpen"><span
              class="mr-[10px]">·</span> Request
            Demo</div>
          <div>
            <div class="label wow fadeInUp" data-wow-delay="0.4s">PRODUCT - Decision Support Toolbox</div>
            <div class="desc wow fadeInUp" data-wow-delay="0.6s">Tranafomm data into real-time decisions that drive
              efficiency and resilience</div>
          </div>
        </div>

        <div class="excellence-solutions wow fadeInUp">
          <div class="solutions-item wow fadeInLeft">
            <div class="label wow fadeInUp">PRODUCT-User Facing Solutions</div>
            <div class="info wow fadeInUp">Deliver intuitive solutions that put users at the center of every interaction
            </div>
            <div class="btn transition-hover wow fadeInUp" @click="onFormDialogOpen"><span class="mr-[10px]">·</span>
              Request Demo</div>
          </div>
          <div class="solutions-item wow fadeInRight">
            <div class="label wow fadeInUp">Make smarter choices, </div>
            <div class="second-label wow fadeInUp">faster — with AI-powered analytics.</div>
            <div class="btn transition-hover wow fadeInUp" @click="onFormDialogOpen"><span class="mr-[10px]">·</span>
              Request Demo</div>
          </div>
        </div>

        <div class="excellence-innovation">
          <div class="tips wow fadeInDown" data-wow-delay="0.2s">Pioneering Al that is secure, safe, and privacy - first
          </div>
          <div class="label wow fadeInUp" data-wow-delay="0.4s">Innovation <br />without compromise </div>
          <div class="img-wrap wow fadeInUp">
            <div class="img">
              <img src="@/assets/images/img_innovation_card1.png" alt=""></img>
              <div class="info">
                <div class="img-lable">Local-Based Intelligence</div>
                <div class="img-desc">Trusted by government agencies and international governance organizations</div>
              </div>
            </div>
            <div class="img">
              <img src="@/assets/images/bg_excellence_card.png" alt=""></img>
              <div class="info">
                <div class="img-lable">Local-Based Intelligence</div>
                <div class="img-desc">Trusted by government agencies and international governance organizations</div>
              </div>
            </div>
            <div class="img">
              <img src="@/assets/images/bg_product.png" alt=""></img>
              <div class="info">
                <div class="img-lable">Local-Based Intelligence</div>
                <div class="img-desc">Trusted by government agencies and international governance organizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-wrap">
        <div class="footer">
          <div class="logo wow fadeIn">Lucentia AI</div>
          <div class="detail">
            <div class="detail-item">
              <div class="detail-item-info wow slideInRight">Company</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.02s">About Us</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.04s">Contact Us</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.06s">Terms of Service</div>
            </div>

            <div class="detail-item">
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.08s">Services</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.1s">Development</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.12s">Consulting</div>
            </div>

            <div class="detail-item">
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.14s">Connect</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.16s">Facebook</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.18s">Linkedin</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.2s">Twitter</div>
              <div class="detail-item-info wow slideInRight" data-wow-delay="0.22s">Instagram</div>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
  <FormDialog ref="formDialogRef" />
</template>

<script setup>
import FormDialog from '@/components/FormDialog/index.vue'

const formDialogRef = ref(null)

const onFormDialogOpen = () => {
  formDialogRef.value?.open({ size: 'large', width: '500px' })
}
</script>

<style lang="less" scoped>
.container-home {
  --content-width: 1400px;
  width: 100%;
}

@import url(./index.less);
</style>
