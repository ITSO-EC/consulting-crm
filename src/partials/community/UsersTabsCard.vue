<template>
  <div
    class="
      col-span-full
      sm:col-span-6
      xl:col-span-3
      bg-white
      shadow-lg
      rounded-sm
      border border-slate-200
    "
  >
    <div class="flex flex-col h-full">
      <!-- Card top -->
      <div class="grow p-5">
        <!-- Menu button -->
        <div class="relative">
          <EditMenu align="right" class="absolute top-0 right-0 inline-flex">
            <li>
              <router-link
                class="
                  font-medium
                  text-sm text-slate-600
                  hover:text-slate-800
                  flex
                  py-1
                  px-3
                "
                to="#0"
                @click.stop="basicModalOpen = true"
                >Editar perfil</router-link
              >
            </li>
            <li>
              <router-link
                class="
                  font-medium
                  text-sm text-slate-600
                  hover:text-slate-800
                  flex
                  py-1
                  px-3
                "
                to="#0"
                @click.stop="roleModalOpen = true"
                >Editar Rol</router-link
              >
            </li>
            <li>
              <router-link
                class="
                  font-medium
                  text-sm text-rose-500
                  hover:text-rose-600
                  flex
                  py-1
                  px-3
                "
                to="#0"
                @click.stop="dangerModalOpen = true"
                >Eliminar</router-link
              >
            </li>
          </EditMenu>
        </div>
        <!-- Image + name -->
        <header>
          <div class="flex justify-center mb-2">
            <router-link
              class="relative inline-flex items-start"
              :to="item.link"
            >
              <div
                class="
                  absolute
                  top-0
                  right-0
                  -mr-2
                  bg-white
                  rounded-full
                  shadow
                "
                aria-hidden="true"
              >
                <svg
                  class="w-8 h-8 fill-current text-amber-500"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                  />
                </svg>
              </div>
              <img
                class="rounded-full"
                :src="item.image"
                width="64"
                height="64"
                :alt="item.name"
              />
            </router-link>
          </div>
          <div class="text-center">
            <router-link
              class="inline-flex text-slate-800 hover:text-slate-900"
              :to="item.link"
            >
              <h2 class="text-xl leading-snug justify-center font-semibold">
                {{ item.name }}
              </h2>
            </router-link>
          </div>
          <div class="flex justify-center items-center">
            <span class="text-sm font-medium text-slate-400 -mt-0.5 mr-1"
              >-&gt;</span
            >
            <span>{{ item.location }}</span>
          </div>
        </header>
        <!-- Bio -->
        <div class="text-center mt-2">
          <div class="text-sm">{{ item.content }}</div>
        </div>
      </div>
      <!-- Card footer -->
      <div class="border-t border-slate-200">
        <router-link
          class="
            block
            text-center text-sm text-indigo-500
            hover:text-indigo-600
            font-medium
            px-3
            py-4
          "
          to="/messages"
        >
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
              <path
                d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"
              />
            </svg>
            <span>Enviar Mensaje</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- Edit Profile -->
    <ModalBasic
      :modalOpen="basicModalOpen"
      @close-modal="basicModalOpen = false"
      title="Editar Operador"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Para cambiar la foto de perfil, haga click sobre ella.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="item.image"
                width="64"
                height="64"
                :alt="item.name"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="name"
                >Nombre y Apellido</label
              >
              <input id="name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="email"
                >Correo</label
              >
              <input id="email" class="form-input w-full" type="text" />
            </div>

            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="phrase"
                >Breve Descripción</label
              >
              <input id="phrase" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="cellphone"
                >Celular</label
              >
              <input id="cellphone" class="form-input w-full" type="text" />
            </div>

            <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Rol</label
              >
              <select id="country" class="form-select">
                <option>Creador</option>
                <option>Revisor I</option>
                <option>Revisor II</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="
              btn-sm
              border-slate-200
              hover:border-slate-300
              text-slate-600
            "
            @click.stop="basicModalOpen = false"
          >
            Cancelar
          </button>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

    <!-- Edit Role -->
    <ModalBasic
      :modalOpen="roleModalOpen"
      @close-modal="roleModalOpen = false"
      title="Editar Rol"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Por favor, seleccione el nuevo rol a asignar y de click en guardar.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Rol</label
              >
              <select id="country" class="form-select">
                <option>Creador</option>
                <option>Revisor I</option>
                <option>Revisor II</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="
              btn-sm
              border-slate-200
              hover:border-slate-300
              text-slate-600
            "
            @click.stop="roleModalOpen = false"
          >
            Cancelar
          </button>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

    <!-- Delete Profile -->
    <ModalBlank
      id="danger-modal"
      :modalOpen="dangerModalOpen"
      @close-modal="dangerModalOpen = false"
    >
      <div class="p-5 flex space-x-4">
        <!-- Icon -->
        <div
          class="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            shrink-0
            bg-rose-100
          "
        >
          <svg
            class="w-4 h-4 shrink-0 fill-current text-rose-500"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            />
          </svg>
        </div>
        <!-- Content -->
        <div>
          <!-- Modal header -->
          <div class="mb-2">
            <div class="text-lg font-semibold text-slate-800">
              ¿Está seguro que desea eliminar este perfil?
            </div>
          </div>
          <!-- Modal content -->
          <div class="text-sm mb-10">
            <div class="space-y-2">
              <p>Considere que esta acción es irreversible.</p>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex flex-wrap justify-end space-x-2">
            <button
              class="
                btn-sm
                border-slate-200
                hover:border-slate-300
                text-slate-600
              "
              @click.stop="dangerModalOpen = false"
            >
              Cancelar
            </button>
            <button class="btn-sm bg-rose-500 hover:bg-rose-600 text-white">
              Si, eliminar
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  </div>
</template>

<script>
import { ref } from "vue";
import EditMenu from "../../components/DropdownEditMenu.vue";
import ModalBasic from "../../components/ModalBasic.vue";
import ModalBlank from '../../components/ModalBlank.vue'

export default {
  name: "UsersTabsCard",
  props: ["item"],
  components: {
    EditMenu,
    ModalBasic,
    ModalBlank
  },
  setup() {
    const basicModalOpen = ref(false);
    const roleModalOpen = ref(false);
    const dangerModalOpen = ref(false);

    return {
      basicModalOpen,
      roleModalOpen,
      dangerModalOpen,
    };
  },
};
</script>