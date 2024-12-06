<template>
  <div>
    <div id="app" class="relative">
      <!-- Tugmani bosganda modalni ochish -->

      <!-- Modal Overlay -->
      <div
        v-if="showModal1"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
      >
        <!-- Modal Content -->
        <div class="bg-white rounded-lg shadow-lg p-6 w-96 w-[500px]">
          <h2 class="text-lg font-semibold mb-4">{{}}</h2>

          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Title</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g Dasturlash"
              v-model="title"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Period</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g 2oy"
              v-model="period"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Teacher</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g F.I.SH"
              v-model="teacher"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>lessons</p>
            <input
              type="number"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g 7/3"
              v-model="countOfLes"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>lanuage</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g uz ru"
              v-model="lanuage"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>image</p>
            <input
              type="file"
              accept="image/*"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="example.png"
              @change="uploadImg = $event.target"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>video</p>
            <input
              type="file"
              accept="video/*"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="example.mp4"
              @change="uploadVid = $event.target"
            />
          </div>
          <!-- Amal tugmalari -->
          <div class="flex justify-end space-x-2">
            <button
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              @click="showModal1 = false"
            >
              Bekor qilish
            </button>
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              @click="(showModal1 = false), submitModal()"
            >
              Tasdiqlash
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!checkLogin"
      class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          @submit.prevent="admin(), getCourses()"
          class="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900"
              >username</label
            >
            <div class="mt-2">
              <input
                v-model="login"
                name="email"
                id="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              @click="admin()"
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Start a 14 day free trial</a
          >
        </p>
      </div>
    </div>

    <div id="app" class="relative">
      <!-- Tugmani bosganda modalni ochish -->

      <!-- Modal Overlay -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
      >
        <!-- Modal Content -->
        <div class="bg-white rounded-lg shadow-lg p-6 w-96 w-[500px]">
          <h2 class="text-lg font-semibold mb-4">Kurs qo'shish</h2>

          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Title</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g Dasturlash"
              v-model="title"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Period</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g 2oy"
              v-model="period"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>Teacher</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g F.I.SH"
              v-model="teacher"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>lessons</p>
            <input
              type="number"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g 7/3"
              v-model="countOfLes"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>lanuage</p>
            <input
              type="text"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="e.g uz ru"
              v-model="lanuage"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>image</p>
            <input
              type="file"
              accept="image/*"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="example.png"
              @change="uploadImg = $event.target"
            />
          </div>
          <div class="title-w flex gap-4 items-center mb-4 justify-between">
            <p>video</p>
            <input
              type="file"
              accept="video/*"
              class="border w-[350px] border-gray-400 rounded p-2"
              placeholder="example.mp4"
              @change="uploadVid = $event.target"
            />
          </div>

          <!-- Amal tugmalari -->
          <div class="flex justify-end space-x-2">
            <button
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              @click="showModal = false"
            >
              Bekor qilish
            </button>
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              @click="(showModal = false), handleSubmit(), getCourses()"
            >
              Tasdiqlash
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="admin-panel" v-if="checkLogin">
      <!-- Chap menyu -->
      <aside class="menu">
        <h3>Bo'limlar</h3>
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.id"
            @click="selectMenuItem(item)"
            :class="{ active: selectedMenuItem?.id === item.id }"
          >
            {{ item.name }}
          </li>
          <li @click="logOut()">Log Out</li>
        </ul>
      </aside>

      <!-- O'ng panel -->
      <main class="details">
        <div class="header">
          <h2 class="title">{{ selectedMenuItem?.name || "Kurslar" }}</h2>
          <button @click="showModal = true" class="add-btn">
            + Kurs Qo'shish
          </button>
        </div>

        <div class="course-list">
          <div
            v-for="course in courses"
            :key="course.id"
            class="course-card flex flex-col"
          >
            <img
              :src="`https://iteach-jedq.onrender.com/images/${course.image}`"
              alt=""
            />
            <div class="info flex gap-[30px] items-center">
              <h3>{{ course.title }}</h3>
              <p>Davomiylik: {{ course.period }}</p>
              <p>O'qituvchi: {{ course.teacher }}</p>
              <p>Kurslar: {{ course.lesson_count }}</p>
              <p>Til: {{ course.language }}</p>
              <div class="actions">
                <button @click="openEditModal(course)" class="edit-btn">
                  Tahrirlash
                </button>
                <button @click="deleteCourse(course.id)" class="delete-btn">
                  O'chirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import services from "~/services/services";
const uploadImg = ref(null);
const uploadVid = ref(null);
const title = ref("");
const period = ref("");
const teacher = ref("");
const countOfLes = ref("");
const lanuage = ref("");
const login = ref("");
const password = ref("");

const checkLogin = ref(localStorage.getItem("token") ? true : false);

const fileInput = ref(null);
const userToken = ref(
  localStorage.getItem("token") ? localStorage.getItem("token") : ""
);
// Forma yuborish funksiyasi
async function handleSubmit() {
  const form = {
    title: title.value,
    period: period.value,
    teacher: teacher.value,
    lesson_count: countOfLes.value,
    language: lanuage.value,
  };
  const response = await services.addCourse(form, userToken.value);
  if (response.register_id) {
    uploadIMGFunc(response.register_id);
    uploadVIDFunc(response.register_id);
  }
  getCourses()
}
async function uploadIMGFunc(id) {
  console.log(uploadImg.value.files);
  let formdata = new FormData();
  formdata.append("file", uploadImg.value.files[0]);
  const res = await services.uploadIMG(formdata, userToken.value, id);
  console.log(res);
}
async function uploadVIDFunc(id) {
  console.log(uploadVid.value.files);
  let formdata = new FormData();
  formdata.append("file", uploadVid.value.files[0]);
  const res = await services.uploadVid(formdata, userToken.value, id);
  console.log(res);
}

async function logOut() {
  localStorage.removeItem("token");
  window.location.reload();
}

// Menyu va kurslar
const menuItems = ref([{ id: 3, name: "Cources" }]);

const selectedMenuItem = ref(menuItems.value[0]);

// Modal boshqaruvi
const showModal = ref(false);
const showModal1 = ref(false);
const modalType = ref(""); // 'add' yoki 'edit'

// Kursni o'chirish
async function deleteCourse(id) {
  const res = await services.deleteCourse(id, userToken.value);
  console.log(id);
  getCourses();
}

const courses = ref();

async function getCourses() {
  const res = await services.getAllCourses();
  courses.value = res;
}
getCourses();

const selectedCourseId = ref(null);

async function submitModal() {
  const form = {
    title: title.value,
    period: period.value,
    teacher: teacher.value,
    lesson_count: countOfLes.value,
    language: lanuage.value,
    image: uploadImg.value.files[0],
    video: uploadVid.value.files[0],
  };

  try {
    if (modalType.value === "edit" && selectedCourseId.value) {
      // Kursni tahrirlash
      const response = await services.editCourse(
        form,
        userToken.value,
        selectedCourseId.value
      );

      if (response) {
        // Ro‘yxatdagi mavjud kursni yangilash
        const index = courses.value.findIndex(
          (course) => course.id === selectedCourseId.value
        );
        if (index !== -1) {
          courses.value[index] = { ...courses.value[index], ...form };
        }
      } else {
        console.error("Kursni yangilashda xatolik yuz berdi.");
      }
    } else {
      console.error("Tahrirlash uchun kurs ID topilmadi.");
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }

  // Modalni yopish va formani tozalash
  showModal.value = false;
  clearForm();
}

// Kursni tahrirlash uchun formani tozalash
function clearForm() {
  title.value = "";
  period.value = "";
  teacher.value = "";
  countOfLes.value = "";
  lanuage.value = "";
  selectedCourseId.value = null;
}

// Tahrir qilish modalini ochish
function openEditModal(course) {
  showModal1.value = true;
  modalType.value = "edit"; // Edit holatini o'rnatish
  title.value = course.title;
  period.value = course.period;
  teacher.value = course.teacher;
  countOfLes.value = course.lesson_count;
  lanuage.value = course.language;

  // Kurs ID'sini saqlash va tekshirish
  selectedCourseId.value = course.id;
  console.log("Tanlangan kurs ID:", selectedCourseId.value); // ID ni konsolga chiqarish
}

async function admin() {
  let formdata = new FormData();
  formdata.append("username", login.value);
  formdata.append("password", password.value);
  const res = await services.login(formdata);
  userToken.value = res;
  localStorage.setItem("token", res.access_token);
  window.location.reload();
}
</script>

<style>
</style>