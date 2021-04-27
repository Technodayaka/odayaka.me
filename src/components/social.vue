<template>
<div class="social">
        <div class="places">
        <div class="logos">
          <div class="tw">
            <a href="https://https://twitter.com/OliverKeays">
              <img
                src="@/assets/TwitterLogo blue.svg"
                alt="Twitter logo"
                width="64px"
                height="64px"
              />
            </a>
          </div>
        <div class="yt">
            <a href="https://www.youtube.com/channel/UCe153xGskIhdLEVDXGKMZdw">
                <img src="@/assets/yt.svg" alt="YouTube logo" width="64px" height="64px">
            </a>
        </div>
      </div>
    </div>
      <div class="my-tweets">
        <a class="twitter-timeline" data-width="800" data-height="1200" data-dnt="true" href="https://twitter.com/OliverKeays?ref_src=twsrc%5Etfw">Tweets by OliverKeays</a>
        <br>
        <a href="https://twitter.com/intent/tweet?screen_name=OliverKeays&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-dnt="true" data-show-count="false">Tweet me</a>
    </div>
    </div>
</template>
<script lang="ts">
/* eslint-disable */
export default {
  name: "social"
};
</script>
<style>
.where-you-can-find-me {
  height: 100%;
  margin-top: 20%;
}
.places {
  padding: 200px;
}
.logos {
  display: flex;
  flex-direction: row;
  margin-right: 50%;
}
.my-tweets {
    display: block;
    right: 50%;
}
</style>
